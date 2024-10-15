<?php

use App\Http\Controllers\FormController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'landingPage']);
Route::get('/fakultas-ekonomi', [PageController::class, 'economicsFaculty']);
Route::get('/akuntansi', [PageController::class, 'akuntansi']);
Route::get('/manajemen', [PageController::class, 'manajemen']);
Route::get('/kata-mereka', [PageController::class, 'kataMereka']);
Route::get('/sop', [PageController::class, 'sop']);
Route::get('/news/{slug}', [PageController::class, 'newsDetailPages']);
Route::get('/all-news', [PageController::class, 'allNews']);
Route::get('/archive/{yearParam}/{monthParam}', [PageController::class, 'archiveDetails']);
Route::get('/search', [PageController::class, 'searchResults'])->name('searchResults');

Route::post('/submit-form', [FormController::class, 'submitForm'])->name('submitForm');
