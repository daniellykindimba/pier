<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\PierMigration;

class CMSController extends Controller
{
    public function index(){
        $models = PierMigration::all();
        return view('cms.index', compact('models'));
    }

    public function upload_file(Request $request){
        if($request->hasFile('file')) {
            $file = $request->file('file');
            $destination_path = $request->input('destination_path');

            $file = request()->file('file');

            $uploaded_file = Storage::disk('public_uploads')->put($destination_path, $file);
            if(!$uploaded_file)
                throw new Exception("File not uploaded", 1);
            else
                return response()->json([
                    "file" => $uploaded_file
                ]);

            throw new Exception("File not uploaded", 1);
            return;
        }

        throw new Exception("No file received", 1);
    }
}
