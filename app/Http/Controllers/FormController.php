<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FormController extends Controller
{
    public function submitForm(Request $request) 
    {
        $validateData = $request->validate([
            'Nama' => 'required|string|max:255',
            'Email' => 'required|email',
            'Perihal' => 'required|string|max:255',
            'Pesan' => 'required|string',
        ]);

        $formData = $validateData;
        $formData['access_key'] = "14063d0b-9dfc-428a-a6ad-0000213b634c";

        $response = Http::asForm()->post('https://api.web3forms.com/submit', $formData);

        if ($response->successful()) {
            return response()->json([
                'success' => true,
                'message' => 'Form Submitted Successfullly',
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'There was an error submitting the form',
            ], 400);
        }
    }
}
