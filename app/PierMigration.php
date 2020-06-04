<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class PierMigration extends Model{
    protected $fillable = [
        '_id', 'name', 'fields'
    ];

    protected $primaryKey = '_id';
    public $incrementing = false;

    static function describe($modelId){
        return PierMigration::find($modelId);
    }
    
    static function browse($model){
        $table_name = Str::snake($model);
        return DB::table($table_name)->get();
    }
    
    static function populate($model){
        $table_name = Str::snake($model);
        $model_name = self::pascal_to_sentence($model);
        $model = PierMigration::where("name", $model_name)->first();
        $fields = json_decode($model->fields);
        $types = collect($fields)->map(function($field){
            return $field->type;
        })->toArray();
        $image_fields = collect($fields)->filter(function($field){
            return $field->type === "image";
        });

        $images = null;
        $faces = null;
        $videos = null;

        if(count($image_fields) > 0){
            // try {
                $face_images = $image_fields->filter(function($field){
                    return $field->meta->face;
                })->toArray();
                
                $non_face_images = $image_fields->filter(function($field){
                    return !$field->meta->face;
                })->toArray();

                if(count($non_face_images) > 0){
                    $imageResponse = Http::withoutVerifying()->get('https://api.unsplash.com/photos?per_page=30&order_by=latest&client_id=17ef130962858e4304efe9512cf023387ee5d36f0585e4346f0f70b2f9729964');
                    $images = collect($imageResponse->json())->map(function($img){
                        return $img['urls']['regular'];
                    })->toArray();
                }
                
                if(count($face_images) > 0){
                    $faceResponse = Http::withoutVerifying()
                        ->withHeaders([
                            "X-API-KEY" => "bdb5f9a87e61a8af46a91c3037a733"
                        ])
                        ->get('https://uifaces.co/api?limit=30');
                    $faces = collect($faceResponse->json())->map(function($img){
                        return $img['photo'];
                    })->toArray();
                }
            // } catch (\Throwable $th) {}
        }
        
        if(in_array("video", $types)){
            try {
                $response = Http::withoutVerifying()->get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=beautiful&type=video&videoEmbeddable=true&fields=items(id)&key=AIzaSyA_Rg25Nc3IbNh3OBP6KkeHXinC9T3ajyw");
                $videos = collect($response->offsetGet('items'))->map(function($video){
                    return "https://www.youtube.com/watch?v=".$video['id']['videoId'];
                })->toArray();
            } catch (\Throwable $th) {}
        }

        $entries = [];
        for ($i=0; $i < 25; $i++) { 
            $entry = self::populateRow($fields, $images, $faces, $videos);
            DB::table($table_name)->insert($entry);
            $entries[] = $entry;
        }
        
        return $entries;
    }

    static function populateRow($fields, $images, $faces, $videos){
        $pierModel = [];
        $pierModel['_id'] = UUID::v4();
        $pierModel['created_at'] = now();
        $pierModel['updated_at'] = now();

        foreach($fields as $field) {
            $label = $field->label;
            $type = $field->type;

            if($type == "image"){
                try {
                    $isFace = $field->meta->face;

                    if($isFace && is_array($faces) && count($faces) > 0)
                        $pierModel[$label] = $faces[array_rand($faces, 1)];
                    else if(is_array($images) && count($images) > 0)
                        $pierModel[$label] = $images[array_rand($images, 1)];
                    else
                        $pierModel[$label] = self::field_generator($type);
                } catch (\Throwable $th) {
                    if(is_array($images) && count($images) > 0)
                        $pierModel[$label] = $images[array_rand($images, 1)];
                    else
                        $pierModel[$label] = self::field_generator($type);
                }
            }
            else if($type == "video" && is_array($videos) && count($videos) > 0)
                $pierModel[$label] = $videos[array_rand($videos, 1)];
            else{
                $meta = isset($field->meta) ? $field->meta : null;
                $pierModel[$label] = self::field_generator($type, $meta);
            }
                
        };

        return $pierModel;
    }

    static function record($model, $fields){
        $table_name = Str::snake($model);
        $model_name = self::pascal_to_sentence($model);

        $modelEntry = [
            "_id" => UUID::v4(),
            "name" => $model_name, 
            "fields" => $fields->toJson()
        ];

        $pierModel = PierMigration::create($modelEntry);
        
        Schema::create($table_name, function (Blueprint $table) use($fields){
            $table->uuid("_id");
            
            foreach($fields as $field) {
                $label = $field['label'];
                $type = $field['type'];
                $nullable = !$field['required'];
    
                self::field_type_map($table, $label, $type, $nullable);
            };
            
            $table->timestamps();
            $table->primary("_id");
        });
        
        // re-retrieve the instance to get all of the fields in the table.
        return $pierModel->fresh();
    } 
      
    static private function pascal_to_sentence($string){
        $words_splited = preg_split('/(?=[A-Z])/', $string);
        $words_capitalized = array_map("ucfirst", $words_splited);
        return trim(implode(" ", $words_capitalized));
    }

    static private function field_generator($type, $meta = null){
        $faker = Faker::create();

        switch ($type) {
            case 'name':
                return $faker->name;

            case 'email':
                return $faker->unique()->safeEmail;

            case 'password':
                return $faker->password();
                
            case 'phone':
                return $faker->phoneNumber;

            case 'image':
                return $faker->imageUrl();
                
            case 'video':
                return $faker->url;
                
            case 'file':
                return $faker->file();
                
            case 'link':
                return $faker->url;
                
            case 'location':
                return $faker->streetAddress;
                
            case 'long text':
                return $faker->paragraph;
                
            case 'string':
                return $faker->sentence(3, true);
                
            case 'number':
                return $faker->numberBetween(13, 237);
                
            case 'rating':
                return $faker->randomFloat(1, 1, $meta->outOf);
                
            case 'boolean':
                return $faker->randomElement(array (0,1));
                
            case 'date':
                return $faker->dateTimeBetween('now', '+3 months', null)->format('Y-m-d H:i:s');
            
            default:
                return "";
        }
    }
    
    static private function field_type_map(Blueprint $table, $field, $type, $nullable){
        $processed = null;

        switch ($type) {
            case 'name':
                $processed = $table->string($field);
                break;

            case 'email':
                $processed = $table->string($field);
                break;

            case 'password':
                $processed = $table->string($field);
                break;
                
            case 'phone':
                $processed = $table->string($field);
                break;

            case 'image':
                $processed = $table->text($field);
                break;
                
            case 'video':
                $processed = $table->text($field);
                break;
                
            case 'file':
                $processed = $table->text($field);
                break;
                
            case 'link':
                $processed = $table->text($field);
                break;
                
            case 'location':
                $processed = $table->text($field);
                break;
                
            case 'long text':
                $processed = $table->longText($field);
                break;
                
            case 'string':
                $processed = $table->string($field);
                break;
                
            case 'number':
                $processed = $table->bigInteger($field);
                break;
                
            case 'rating':
                $processed = $table->float($field);
                break;
                
            case 'boolean':
                $processed = $table->boolean($field)->default(0);
                break;
                
            case 'date':
                $processed = $table->timestamp($field);
                break;
            
            default:
                $processed = $table->string($field);
                break;
        }

        if($nullable)
            $processed->nullable();
    }
}
