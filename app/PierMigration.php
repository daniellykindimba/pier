<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class PierMigration extends Model{
    protected $fillable = [
        '_id', 'name', 'fields'
    ];

    protected $primaryKey = '_id';
    public $incrementing = false;

    static function describe($model){
        $model_name = self::pascal_to_sentence($model);
        return PierMigration::where("name", $model_name)->first();
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
                $nullable = isset($field['nullable']) ?: false;
    
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

    static private function field_type_map(Blueprint $table, $field, $type, $nullable = false){
        $processed = null;

        switch ($type) {
            case 'name':
                $table->string($field);
                break;

            case 'email':
                $table->string($field);
                break;

            case 'password':
                $table->string($field);
                break;
                
            case 'phone':
                $table->string($field);
                break;

            case 'image':
                $table->text($field);
                break;
                
            case 'video':
                $table->text($field);
                break;
                
            case 'file':
                $table->text($field);
                break;
                
            case 'link':
                $table->text($field);
                break;
                
            case 'location':
                $table->text($field);
                break;
                
            case 'long text':
                $table->longText($field);
                break;
                
            case 'string':
                $table->string($field);
                break;
                
            case 'number':
                $table->bigInteger($field);
                break;
                
            case 'boolean':
                $table->boolean($field)->default(0);
                break;
                
            case 'date':
                $table->timestamp($field);
                break;
            
            default:
                $processed = $table->string($field);
                break;
        }

        if($nullable)
            $processed->nullable();
    }
}
