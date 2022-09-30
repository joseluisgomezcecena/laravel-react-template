<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|unique:users,email',
            'password' => 'required|confirmed|min:6'
        ]);


       $user = User::create(array_merge($request->all(), ["password" => Hash::make($request->password)]));

       $token = $user->createToken('auth_token')->plainTextToken;

       return[
           'token' => $token,
           'user' => $user
       ];
    }



    public function login(Request $request)
    {
        if(!auth()->attempt($request->only('email', 'password'))){
            return response()->json([
                'message' => 'Invalid login credentials.'
            ], 401);
        }

        $user = auth()->user();
        $token = $user->createToken('token')->plainTextToken;

        return ['token' => $token];

    }


    public function init()
    {
        $user = null;
        if(auth()->guard('sanctum')->check()){
            $user = User::with('bank_accounts')->where('id', auth()->guard('sanctum')->id)->first();
        }

        return ['user' => $user];
    }

}
