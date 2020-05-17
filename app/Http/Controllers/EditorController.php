<?php

namespace App\Http\Controllers;
use App\PierMigration;

use Illuminate\Support\Collection;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function create($model, Request $request){
        // $fields = '[{"label": "image", "type": "image"}, {"label": "title","type": "string"}, {"label": "description","type": "long text"}, {"label": "start_date","type": "date"}]';
        // return response()->json([
        //     "model" => $model,
        //     "data" => $request->all()
        // ]);
        $fields = collect($request->input('fields'));
        $res = PierMigration::record($model, $fields);
        return response()->json([
            "message" => $res
        ]);
        // $arr = $fields->map(function($field){
        //     return $field['type'];
        // });
        // return response()->json([
        //     "message" => $arr
        // ]);
    }
    
    public function list($model = null){
        if(!\is_null($model))
            return $this->describe($model);

        $res = PierMigration::all();

        return response()->json([
            "success" => true,
            "data" => $res
        ]);
    }
    
    public function describe($model){
        $res = PierMigration::describe($model);

        return response()->json([
            "success" => true,
            "data" => $res
        ]);
    }
}
