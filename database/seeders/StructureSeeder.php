<?php

namespace Database\Seeders;

use App\Models\Structure;
use Illuminate\Database\Seeder;

class StructureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Structure::create([
            'name' => "Dr. Novi Darmayanti, SE, MSA, Ak, CA",
            'role' => "DEKAN",
            'image' => 'assets/struktur-1.jpg',
            'description' => "Dekan Fakultas Ekonomi",
            'NIDN' => '0707118301',
            'address' => 'Jl. Paviliun No. 5 Lamongan',
        ]);
        
        Structure::create([
            'name' => "Martha Laila Arisanda, S.E, M.M",
            'role' => "WADEK",
            'image' => 'assets/struktur-2.jpg',
            'description' => "Wakil Dekan Bid. Akademik",
            'NIDN' => '0720038505',
            'address' => 'Jl. Semeru g-13 Pri Tuban Indah, Latsari, Tuban',
        ]);
        
        Structure::create([
            'name' => "Moh. Azus Shony Azar, S.E, M.M",
            'role' => "WADEK",
            'image' => 'assets/struktur-3.jpg',
            'description' => "Wakil Dekan Bid. Kemahasiswaan",
            'NIDN' => '0707029701',
            'address' => 'Dusun Bali',
        ]);
        
        Structure::create([
            'name' => "Isnaini Anniswati Rosyida, SE., M.Pd., M.Ak.",
            'role' => "KAJUR",
            'image' => 'assets/struktur-4.jpg',
            'description' => "Kajur Akuntansi",
            'NIDN' => '0709067502',
            'address' => 'Jl. Meliwis Putih no.32, Bojonegoro',
        ]);
        
        Structure::create([
            'name' => "Ali Muhajir, M.M",
            'role' => "KAJUR",
            'image' => 'assets/struktur-5.jpg',
            'description' => "Kajur Manajemen",
            'NIDN' => '0720038505',
            'address' => "Jl. Purwosari RT.12/RW.04. Ds. Petung, Kec. Panceng, Kab. Gresik",
        ]);
        
    }
}
