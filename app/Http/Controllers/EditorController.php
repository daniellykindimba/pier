<?php

namespace App\Http\Controllers;
use App\PierMigration;

use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function create(Request $request){
        $model = $request->input('name');
        $fields = collect($request->input('fields'));
        $res = PierMigration::record($model, $fields);
        return response()->json($res);
    }
    
    public function list(){
        $res = PierMigration::all();
        return response()->json($res);
    }
    
    public function populate($modelId){
        $res = PierMigration::populate($modelId);
        return response()->json($res);
    }
    
    public function browse($modelId){
        $res = PierMigration::browse($modelId);
        return response()->json($res);
    }
}
