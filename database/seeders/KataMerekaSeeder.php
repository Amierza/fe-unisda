<?php

namespace Database\Seeders;

use App\Models\KataMereka;
use Illuminate\Database\Seeder;

class KataMerekaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        KataMereka::create([
            'commentatorName' => "Sevira Lupita Anjani",
            'commentatorCompany' => "PT. Petro Oxo Nusantara",
            'comment' => "Senang rasanya dapat menjadi alumni dari Prodi Akuntansi Unisda, sehingga dapat mengantarkan banyak lulusannya ke berbagai kesempatan karir di dunia bisnis dan industri. Fakultas Ekonomi khususnya, secara dinamis terus mengembangkan program pembelajaran kampus berdasarkan kurikulum yang ada, salah satunya mata kuliah PKL (Praktik Kerja Lapangan) yang akhirnya dapat membawa saya diterima sebagai salah satu karyawan di PT Petro Oxo Nusantara. Dosen pengajar yang berkompeten dan kreatif dalam pembelajaran mendorong semangat juang yang tinggi pada mahasiswa dan alumni, baik selama perkuliahan maupun ketika terjun dalam dunia profesional.",
        ]);

        KataMereka::create([
            'commentatorName' => "Adit Iwan Efendi",
            'commentatorCompany' => "PT. BPR Nusumma Jatim Kc. Lamongan",
            'comment' => "“Banyak sekali pengalaman dan bekal berharga yang saya dapat di masa bangku kuliah UNISDA LAMONGAN dengan menjadi alumni program studi manajemen angkatan 2017, maka berkesempatan untuk menggapai cita-cita saya, banyak bersyukur bisa dapat berkarir di PT. BPR NUSUMMA JATIM. karena banyak hal yang positif yang membawa perubahan baik dalam diri saya, dari solidaritas yang dapat saya peroleh dari Fakultas Ekonomi Manajemen . Dosen juga berkompeten dan peduli terhadap mahasiswa. Hal itu dibuktikan dengan hasil yang saya peroleh sekarang”. Buat adik-adik sekalian jangan pernah minder untuk berproses dan progres, karena kita tidak kalah keren dibandingkan mereka, tetap semangat💪💪💪 FE First, Unisda Jaya🫰.",
        ]);
        
        KataMereka::create([
            'commentatorName' => "Eka Alvira Juliatin",
            'commentatorCompany' => "KSPP Syariah BMT NUT Bojonegoro",
            'comment' => "Sebagai salah seorang Alumni Fakultas Ekonomi Unisda Lamongan, terkhusus Prodi Manajemen memiliki kompetensi yang baik dalam bersaing di dunia kerja. Hal ini dikarenakan saat belajar di Prodi Manajemen Unisda Lamongan mahasiswa telah didukung oleh berbagai peluang pembelajaran yang dalam cakupan yang cukup luas melalui berbagai program seperti pertukaran mahasiswa ke universitas di dalam dan luar negeri. Sebagai seorang alumni, saya sangat bangga dengan kampus saya. Berbagai program pembelajaran yang saya dapatkan telah mampu menunjang perjalanan karir saya. Satu hal terbaik yang selalu saya banggakan adalah para dosen inspiratif yang mampu memacu semangat para mahasiswa dan mahasiswinya untuk bangkit menjawab tantangan yang semakin berat.",
        ]);

        KataMereka::create([
            'commentatorName' => "Eka Anti K",
            'commentatorCompany' => "BRI Lamongan",
            'comment' => "Saya sebagai alumni mahasiswa Prodi Akuntansi Unisda berterimaksih banyak atas pembelajaran yang selama ini di berikan dosen”Fakultas ekonomi karena dari pembelajaran baik ilmu maupun moral dapat membuat saya ataupun teman” dari lulusan unisda mampu bersaing dalam dunia kerja. FE First, Unisda Jaya.",
        ]);

        KataMereka::create([
            'commentatorName' => "Mustofa",
            'commentatorCompany' => "CEO CV. Modo Herba Kayana",
            'comment' => "Kuliah di UNISDA dan memutuskan memilih Fakultas Ekonomi jurusan Manajemen adalah salah satu keputusan terbaik yang pernah ambil, keputusan ini menjadi salah satu titik balik yang mengubah hidup saya bagaikan langit dan bumi. UNISDA memberikan lingkungan positif yang tidak hanya membuat saya berkembang secara akademis, juga membentuk mental dan karakter. Kuliah di UNISDA menjadi bekal saya untuk mendirikan perusahaan kami sendiri CV. Modo Herba Kayana sehingga bisa memberi manfaat lebih banyak orang lewat lapangan pekejaan.",
        ]);
    }
}
