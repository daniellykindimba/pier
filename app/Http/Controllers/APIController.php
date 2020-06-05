<?php

namespace App\Http\Controllers;

use App\PierMigration;
use Illuminate\Http\Request;

class APIController extends Controller
{
    public function resource($model){
        $res = PierMigration::browse($model);
        return response()->json($res);
    }
    
    public function deleteResource($model, $rowId){
        $res = PierMigration::deleteEntry($model, $rowId);
        return response()->json($res);
    }
}
