<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KataMereka extends Model
{
    use HasFactory;

    protected $fillable = [
        'commentatorName',
        'commentatorCompany',
        'comment',
    ];
}
