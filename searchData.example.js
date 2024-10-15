import News1 from "../../public/storage/assets/news-detail-pages-1.png";
import News2 from "../../public/storage/assets/news-detail-pages-2.png";
import News3 from "../../public/storage/assets/news-detail-pages-3.png";
import News4 from "../../public/storage/assets/news-detail-pages-4.png";
import News5 from "../../public/storage/assets/news-detail-pages-5.png";
import News6 from "../../public/storage/assets/news6.png";
import News7 from "../../public/storage/assets/news7.png";
import News8 from "../../public/storage/assets/news8.png";
import News9 from "../../public/storage/assets/news9.png";
import News13 from "../../public/storage/assets/news13.png";
import News14 from "../../public/storage/assets/news14.png";
import News15 from "../../public/storage/assets/news15.png";
import News16 from "../../public/storage/assets/news16.png";
import News17 from "../../public/storage/assets/news17.png";
import News18 from "../../public/storage/assets/news18.png";
import News20 from "../../public/storage/assets/news20.png";
import News21 from "../../public/storage/assets/news21.png";
import News23 from "../../public/storage/assets/news23.png";
import News24 from "../../public/storage/assets/news24.png";
import News25 from "../../public/storage/assets/news25.png";
import News26 from "../../public/storage/assets/news26.png";
import News27 from "../../public/storage/assets/news27.png";
import News28 from "../../public/storage/assets/news28.png";
import News29 from "../../public/storage/assets/news29.png";
import News30 from "../../public/storage/assets/news30.png";
import News31 from "../../public/storage/assets/news31.png";
import News32 from "../../public/storage/assets/news32.png";
import News33 from "../../public/storage/assets/news33.png";
import News34 from "../../public/storage/assets/news34.png";
import News35 from "../../public/storage/assets/news35.png";
import News36 from "../../public/storage/assets/news36.png";
import News37 from "../../public/storage/assets/news37.png";
import News38 from "../../public/storage/assets/news38.png";
import News39 from "../../public/storage/assets/news39.png";
import News40 from "../../public/storage/assets/news40.png";
import News41 from "../../public/storage/assets/news41.png";
import News42 from "../../public/storage/assets/news42.png";
import News43 from "../../public/storage/assets/news43.png";
import News44 from "../../public/storage/assets/news44.png";
import News45 from "../../public/storage/assets/news45.png";
import News46 from "../../public/storage/assets/news46.png";
import News47 from "../../public/storage/assets/news47.png";

import Yudisium from "../../public/storage/assets/yudisium.png";
import kknInternasional from "../../public/storage/assets/kkn-internasional.png";
import SidangSkripsi from "../../public/storage/assets/sidang-skripsi.png";
import FGDManajemen from "../../public/storage/assets/fgd-manajemen.png";
import FGDAkuntansi from "../../public/storage/assets/fgd-akuntansi.png";
import KuliahPraktisi from "../../public/storage/assets/kuliah-praktisi.jpg";
import KuliahPraktisiBSI from "../../public/storage/assets/kuliah-praktisi-bsi.png";
import OfflineKuliahPraktisi from "../../public/storage/assets/offline-kuliah-praktisi.png";
import Pekan1 from "../../public/storage/assets/pekan-1.png";
import Pekan2 from "../../public/storage/assets/pekan-2.png";
import PojokPajak from "../../public/storage/assets/pojok-pajak-1.png";
import PojokPajak2 from "../../public/storage/assets/pojok-pajak.png";
import Omaksi from "../../public/storage/assets/omaksi.png";
import WebinarInternasional from "../../public/storage/assets/webinar-internasional.png";
import ConferenceInternasional from "../../public/storage/assets/conference-internasional.png";
import Conference1 from "../../public/storage/assets/conference-1.png";
import Conference2 from "../../public/storage/assets/conference-2.png";
import Conference3 from "../../public/storage/assets/conference-3.png";
import MSIB2024 from "../../public/storage/assets/msib-2024.png";
import komaksi2024 from "../../public/storage/assets/komaksi-ix-2024.png";
import pengmas2024 from "../../public/storage/assets/pengmas-2024.png";
import psw from "../../public/storage/assets/psw-2024.png";
import lpis from "../../public/storage/assets/lpis.png";
import PembekalanDPLPKLFE from "../../public/storage/assets/pembekalan-dpl-pkl-fe.png";
import GuestLecurer from "../../public/storage/assets/guest-lecturer.png";
import LolosPertukaranMahasiswaMerdeka from "../../public/storage/assets/lolos-pertukaran-mahasiswa-merdeka.png";
import LolosSeleksiDPL from "../../public/storage/assets/lolos-seleksi-dpl.png";
import LolosBeasiswaKemendikbudristek2023 from "../../public/storage/assets/lolos-beasiswa-kemendikbudristek-ice-2023.png";
import LolosProgramMSIB2023 from "../../public/storage/assets/lolos-program-msib-2023.png";
import InboundLuring from "../../public/storage/assets/inbound-luring.png";
import InternasionalSeminarUnisda from "../../public/storage/assets/internasional-seminar-unisda.png";
import InternasionalWebinar from "../../public/storage/assets/internasional-webinar.png";
import InkubasiBisnis from "../../public/storage/assets/inkubasi-bisnis.png";
import PKKMB2024 from "../../public/storage/assets/pkkmb-2024.png";
import MBKMOBE1 from "../../public/storage/assets/mbkm-obe-1.png";
import MBKMOBE2 from "../../public/storage/assets/mbkm-obe-2.png";
import FakultasEkonomi from "../../public/storage/assets/fakultas-ekonomi.png";
import AkuntansiProdi from "../../public/storage/assets/akuntansi_1.png";
import ManajemenProdi from "../../public/storage/assets/manajemen_1.png";

export const groupNewsByArchive = (newsData) => {
    const archives = {};
    newsData.forEach((news) => {
        const dateStr = news.date;
        const [month, , year] = dateStr.split(" ");
        const archiveKey = `${month} ${year}`;
        if (!archives[archiveKey]) {
            archives[archiveKey] = [];
        }
        archives[archiveKey].push(news);
    });
    return archives;
};

export const archives = [
    {
        title: "September 2024",
        link: "#",
    },
    {
        title: "Agustus 2024",
        link: "#",
    },
    {
        title: "Juli 2024",
        link: "#",
    },
    {
        title: "Mei 2024",
        link: "#",
    },
    {
        title: "Maret 2024",
        link: "#",
    },
    {
        title: "Februari 2024",
        link: "#",
    },
    {
        title: "Januari 2024",
        link: "#",
    },
];

export const fakultasEkonomi = {
    title: "Fakultas Ekonomi",
    link: "/fakultas-ekonomi",
    image: FakultasEkonomi,
    values: [
        {
            title: "Visi Fakultas Ekonomi",
            value: "“Menjadi Fakultas Ekonomi yang Profesional dengan semangat Entrepreneur, Berdaya Saing Kuat, Mandiri, Berbudaya, Islami dan Bertaraf Internasional pada Tahun 2031.”",
        },
        {
            title: "Misi Fakultas Ekonomi",
            link: "/fakultas-ekonomi",
            value: [
                "Meningkatkan kualitas daya saing mahasiswa ekonomi dengan semangat entrepreneur, berdaya saing kuat, mandiri, berbudaya islami yang bereputasi internasional.",
                "Meningkatkan kualitas penelitian di bidang ekonomi yang bereputasi internasional serta berkonstribusi dalam pengembangan IPTEKS.",
                "Meningkatkan kualitas pengabdian kepada masyarakat di bidang ekonomi, dengan prinsip tata kelola fakultas yang baik, yang bereputasi internasional.",
                "Meningkatkan kualitasGood Faculty Governance dalam pengelolaan organisasidan jaringan kerjasama dengan stakeholderluar negeri.",
                "Meningkatkan kualitas penyelenggaraan program sarjana menghasilkan lulusan yang profesional berdasarkan sumberdayadan lingkungan yang kompetitif di bidang ekonomi akuntansi dan ekonomi manajemen, yang bereputasi internasional.",
            ],
        },
        {
            title: "Tujuan Fakultas Ekonomi",
            link: "/fakultas-ekonomi",
            value: [
                "Meningkatnya mahasiswayang memiliki jiwa entrepreneur, berdayasaing kuat,mandiri, berbudayaislami yangbereputasi internasional.",
                "Meningkatnya relevansi Kuantitas, kualitasdaninovasi penelitiandibidang ekonomibaik akuntansimaupun manajemenyang bereputasi internasional.",
                "Terwujudnya pengabdiankepda masyarakatdibidang ekonomiyang berkualitasdan bereputasi internasional.",
                "Terselenggaranya tatakelolaorganisasi yangefektif,efisien danberintegritas yang berstandart ISO.",
                "Terselenggaranya programsarjana dibidangekonomi baikakuntansi danmanajemen, yangberkualitas danberdayasaing internasional.",
            ],
        },
        {
            title: "Sasaran Strategi Fakultas Ekonomi",
            link: "/fakultas-ekonomi",
            value: [
                "Meningkatnya daya saing mahasiswa di tingkat internasional.",
                "Terciptanya budaya penelitian internasional yang berkontribusi dalam pengembangan IPTEKS.",
                "Terlaksananya pengabdian internasional  kepada masyarakat yang berkualitas dan bermanfaat dalam meningkatkan kesejahteraan masyarakat.",
                "Terlaksananya tata kelola dan pengembangan organisasi, sistem penjaminan mutu, serta jejraing kerjasama dengan stakeholder luar negeri.",
                "Tercapainya program sarjana  dibidang ekonomi baik akuntansi dan manajemen, yang berkualitas dan berdaya saing internasional.",
            ],
        },
        {
            title: "Sasaran Pencapaian Fakultas Ekonomi",
            link: "/fakultas-ekonomi",
            value: [
                {
                    title: "Pertama",
                    item: [
                        "Peningkatan kualitas kegiatan keislaman, keorganisasian, kepemimpinan, bakat, minat serta penalaran.",
                        "Peningkatan minat jiwa entrepreneur mahasiswa.",
                        "Peningkatan jumlah mahasiswa penerima beasiswa.",
                        "Peningkatan prestasi mahasiswa ditingkat internasional.",
                        "Pengembangan karir kemahasiswaan terutama ditingkat internasional.",
                        "Peningkatan Sarana Prasarana kemahasiswaan berbasis internasional.",
                    ],
                },
                {
                    title: "Kedua",
                    item: [
                        "Mengembangkan dan mengimplementasian roadmap penelitian.",
                        "Peningkatan kapasitas kelembagaan dan sumberdaya penelitian internasional.",
                        "Pengembangan pusat studi internasional.",
                        "Pengembangan penelitian internasional multidisplin.",
                        "Inisiasi pengembangan kerjasama penelitian luar negeri.",
                        "Peningkatan jumlah publikasi jurnal akreditasi internasional serta bereputasi scopus.",
                        "Peningkatan jumlah sitasi penelitian dosen, tertutama sitasi jurnal internasional dan scopus.",
                        "Menyusun roadmap penelitian (terutama publikasi di jurnal internasional/ scopus).",
                        "Pengembangan kerjasama dengan luar negeri terkait joint research program.",
                    ],
                },
                {
                    title: "Ketiga",
                    item: [
                        "Menyusun roadmap pengabdian kepada masyarakat.",
                        "Peningkatan jumlah kegiatan pengabdian internasional kepada masyarakat.",
                        "Peningkatan International entrepreneurship berbasis IPTEKS bagi masyarakat.",
                    ],
                },
                {
                    title: "Keempat",
                    item: [
                        "Sistem untuk menjamin tranparansi pengelolaan kelembagaan berbasis ISO.",
                        "Menjamin akuntabilitas melalui Lembaga Akreditasi Dalam dan Luar Negeri.",
                        "Menjamin sistem pengelolaan yang bertanggungjawab, berkeadilan dan kredibel.",
                        "Menjamin sistem pola kepemimpinan operasional, organisasi dan publik.",
                        "Menjamin sistem penjaminan mutu sesuai dengan PPEPP.",
                        "Peningkatan income generating dari hasil kerjasama dan unit usaha.",
                        "Peningkatan sistem tata kelola secara internasional.",
                    ],
                },
                {
                    title: "Kelima",
                    item: [
                        "Peningkatan akses dan mutu calon Maba Asing.",
                        "Pengembangan media & sumber pembelajaran berbasis internasional.",
                        "Pengembangan kurikulum OBE berbasis IES (International Education Standards).",
                        "Peningkatan penjaminan mutu fakultas dan prodi berstandar internasional (IS0 Internasional).",
                        "Pengembangan kelas internasional (Program -S1).",
                        "Pengembangan digitalisasi bisnis kewirausahaan dalam lingkup internasional bagi mahasiswa.",
                        "Menjalin kerjasama dengan Multi Nasional Company.",
                    ],
                },
            ],
        },
        {
            title: "Mekanisme Kontrol Fakultas Ekonomi",
            link: "/fakultas-ekonomi",
            value: "Monitoring dan evaluasi program dan kegiatan oleh pimpinan Unit Pengelola Program Studi dan Program Studi.",
        },
    ],
};

export const prodiAkuntansi = {
    title: "Prodi Akuntansi",
    link: "/akuntansi",
    image: AkuntansiProdi,
    values: [
        {
            title: "Visi Prodi Akuntansi",
            content:
                "“Menjadi Program Studi yang menciptakan lulsan berkeahlian Akuntansi dan berjiwa entrepreneur yang berkemampuan IPTEKS, Berdaya Saing Kuat, Mandiri, Berbudaya, Islami dan Bertaraf Internasional pada Tahun 2031”.",
        },
        {
            title: "Misi Prodi Akuntansi",
            content: [
                "Menyelenggarakan pendidikan ilmu akuntansi dengan berjiwa entrepreneur yang berkemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, islami dan bertaraf internasional.",
                "Mengembangkan dan meningkatkan kualitas dan kuantitas penelitian guna mendukung pengembangan dan kemajuan di bidang Akuntansi dengan berjiwa entrepreneur yang berkemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, islami dan bertaraf internasional.",
                "Memberikan pelayanan pengabdian kepada masyarakat dengan berjiwa entrepreneur dan berkemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, islami dan bertaraf internasional.",
                "Mengoperasikan program studi S1 akuntansi berdasarkan prinsip tata kelola universitas yang baik.",
                "Membangun kerjasama dengan pemangku kepentingan dalam dan luar negeri.",
            ],
        },
        {
            title: "Tujuan Prodi Akuntansi",
            content: [
                "Terwujudnya penyelenggaraan pendidikan ilmu akuntansi dengan berjiwa entrepreneur yang berkemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, islami dan bertaraf internasional.",
                "Terlaksananya pengembangan dan peningkatan kualitas dan kuantitas penelitian guna mendukung pengembangan dan kemajuan di bidang Akuntansi dengan berjiwa entrepreneur yang berkemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, islami dan bertaraf internasional.",
                "Terwujudnya pelayanan pengabdian kepada masyarakat dengan berjiwa entrepreneur dan berkemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, islami dan bertaraf internasional.",
                "Terwujudnya pengoperasian program studi S1 akuntansi berdasarkan prinsip tata kelola universitas yang baik.",
                "Terlaksananya kerjasama dengan stakeholder dari dalam dan luar negeri.",
            ],
        },
        {
            title: "Strategi Prodi Akuntansi",
            content: [
                "Untuk menghasilkan civitas akademik yang unggul dalam pendidikan dan pembelajaran bidang Akuntansi, berjiwa akuntan preneur dengan kemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, dan Islami.",
                "Untuk menghasilkan penelitian dan publikasi bidang Akuntansi yang unggul dan berjiwa akuntan preneur yang inovatif, bermutu, modern, dan relevan dengan pencapaian standar internasional.",
                "Untuk menghasilkan kegiatan pengabdian pada masyarakat yang unggul di bidang Akuntansi serta berjiwa akuntan preneur dengan memanfaatkan perkembangan IPTEKS untuk meningkatkan kesejahteraan masyarakat yang inovatif melalui kerjasama, pelatihan, konsultasi dan pendampingan.",
                "Untuk menghasilkan tata kelola kelembagaan yang unggul berbasis Good University Governance dengan memanfaatkan perkembangan IPTEKS, berdaya saing kuat, mandiri, berbudaya, dan Islami serta Sistem Manajemen Mutu berstandar ISO menuju universitas berkelas dunia (World Class University) sebagai upaya mendapatkan kepercayaan di tingkat Nasional maupun Internasional.",
                "Untuk menghasilkan kerjasama dalam Tri Dharma Perguruan Tinggi, joint degree/ double degree/ sandwich, kelas internasional dengan perguruan tinggi bertaraf internasional.",
            ],
        },
        {
            title: "Sasaram/Indikator Pencapaian Prodi Akuntansi",
            content: [
                {
                    title: "Pertama",
                    item: [
                        "Peningkatan kualitas dan mutu dosen dalam proses belajar mengajar (PBM).",
                        "Terwujudnya pengembangan kurikulum yang selaras dengan dunia usaha dan berkemampuan IPTEKS, berdaya saing kuat, mandiri, berbudaya, dan Islami.",
                        "Peningkatan kulitas proses belajar mengajar (PBM).",
                        "Pengembangan aturan dan standar akademik.",
                        "Peningkatan link and match dengan dunia usaha.",
                        "Terwujudnya sistem penjamin mutu dan mengoptimalkan fungsi setiap bagian yang terkait dengan penjaminan mutu.",
                        "Peningkatan kualitas layanan mahasiswa.",
                        "Peningkatan kualitas kegiatan pembentukan karakter dan pengembangan soft skill mahasiswa.",
                    ],
                },
                {
                    title: "Kedua",
                    item: [
                        "Pengembangan bidang penelitian yang unggul harus mampu meningkatkan kapasistas penelitian yang terkait erat dengan pelaksanaan Tri Dharma Perguruan Tinggi.",
                        "Peningkatan hasil penelitian yang diharapkan dapat memberi kontribusi pada pengembangan keilmuan dan sekaligus menunjang proses belajar mengajar.",
                        "Peningkatan hasil penelitian yang diharapkan dapat memberi kontribusi pada pengembangan keilmuan dan seklaigus menunjang proses belajar mengajar.",
                    ],
                },
                {
                    title: "Ketiga",
                    item: [
                        "Pengembangan bidang pengabdian pada masyarakat yang unggul harus mampu meningkatkan kapasitas penelitian yang terkait erat dengan pelaksanaan Tri Dharma Perguruan Tinggi.",
                        "Memperkuat kemitraan bidang pengabdian pada masyarakat dengan pemerintah dan sektor swasta.",
                    ],
                },
                {
                    title: "Keempat",
                    item: [
                        "Penguatan organ UNISDA guna mendukung tata kelola yang bersih dan baik berbasis Good University Governance dengan memanfaatkan perkembangan IPTEKS, berdaya saing kuat, mandiri, berbudaya, dan Islami.",
                        "Terciptanya budaya akademik yang sesuai dengan perkembangan IPTEKS, berdaya saing kuat, mandiri, berbudaya, dan Islami sebagai dasar pengembangan sumberdaya manusia berakhlaqul karimah.",
                        "Terciptanya Sistem Manajemen Mutu berstandar ISO menuju universitas berkelas dunia (World Class University) sebagai upaya mendapatkan kepercayaan di tingkat Nasional maupun Internasional.",
                    ],
                },
                {
                    title: "Kelima",
                    item: [
                        "Memiliki kerjasama dengan perguruan tinggi bertaraf internasional.",
                        "Memiliki kerjasama dengan Industri bertaraf internasional.",
                    ],
                },
            ],
        },
    ],
};

export const prodiManajemen = {
    title: "Prodi Manajemen",
    link: "/manajemen",
    image: ManajemenProdi,
    values: [
        {
            title: "Visi Prodi Manajemen",
            content:
                "“Menjadi Program Studi yang menghasilkan Sarjana Manajemen yang profesional dan unggul dalam bidang kewirausahaan, sumberdaya manusia dan marketing, yang berbudaya, islami, berdaya saing dan bertaraf internasional pada tahun 2031”.",
        },
        {
            title: "Misi Prodi Manajemen",
            content: [
                "Meningkatkan mutu pendidikan dan pengajaran guna melahirkan lulusan Sarjana Manajemen yang memiliki kompetensi tinggi dalam penguasaan ilmu pengetahuan, teknologi, serta memiliki akhlaq dan integritas moral yang Islomi di bidang bidang kewirausahaan, sumberdaya manusia dan marketing.",
                "Meningkatkan kualitas dan kuantitas penelitian sebagai wujud partisipasi dan kontribusi program studi dalam rangka pengembangan ilmu pengetahuan di bidangbidang kewirausahaan, sumberdaya manusia dan marketing, untuk kepentingan bangsa dan negara.",
                "Meningkatkan kualitas dan kuantitas pengabdian masyarakat sebagai wujud partisipasi dan kontribusi program studi dalam rangka menyebarkan ilmu pengetahuan di bidang bidang kewirausahaan, sumberdaya manusia dan marketing, untuk kepentingan bangsa dan negara.",
                "Meningkatkan kompetensi akademik dosen dan tenaga kependidikan guna mewujudkan penyelenggaraan Tridarma Perguruan Tinggi yang berkualitas dan profesional di bidang bidang kewirausahaan, sumberdaya manusia dan marketing.",
            ],
        },
        {
            title: "Tujuan Prodi Manajemen",
            content: [
                "Menghasilkan pendidikan yang berkualitas, unggul, berdaya saing, mandiri, islami dan berbudaya, serta memiliki keunggulan kompetitif/ komparatif secara global di bidang kewirausahaan, sumberdaya manusia dan marketing.",
                "Menghasilkan kegiatan penelitian yang berkualitas guna mendukung/menopang pendidikan dan kemajuan ilmu pengetahuan, teknologi, seni dan pengayaan budaya dalam bidang kewirausahaan, sumberdaya manusia dan marketing.",
                "Menghasilkan kegiatan pengabdian kepada masyarakat sebagai upaya penerapan ilmu pengetahuan, teknologi, seni, dan budaya dalam lingkup pendidikan bidang kewirausahaan, sumberdaya manusia dan marketing Menghasilkan kerjasama dengan stakeholders untuk meningkatkan kualitas program studi.",
                "Menghasilkan manajernen dengan prinsip tata kelola pendidikan bidang kewirausahaan, sumberdaya manusia dan marketing, yang baik.",
            ],
        },
    ],
};

export const allNews = [
    {
        image: News47,
        date: "September 20, 2024",
        title: "Unisda Lamongan Luncurkan Dokumen Kurikulum MBKM OBE",
        link: "unisda-lamongan-luncurkan-dokumen-kurikulum-mbkm-obe",
        content: [
            {
                type: "images",
                value: [MBKMOBE1, MBKMOBE2],
            },
            {
                type: "text",
                value: "Unisda (Universitas Islam Darul ‘Ulum) Lamongan meluncurkan dokumen kurikulum Merdeka Belajar Kampus Merdeka (MBKM) berbasis Outcome Based Education (OBE).",
            },
            {
                type: "text",
                value: "Peluncuran dokumen kurikulum MBKM OBE tersebut dilakukan secara bersamaan dengan rapat awal semester ganjil 2024/2025, di Ruang Rapat Unisda, Rabu (18/9/2024).",
            },
            {
                type: "text",
                value: "Pada kesempatan itu, Rektor Unisda, Muhammad Hafidh Nashrullah, menekankan pentingnya kolaborasi dan komitmen seluruh sivitas akademika dalam menyongsong perubahan kurikulum tersebut.",
            },
            {
                type: "text",
                value: "“Implementasi kurikulum berbasis OBE adalah langkah strategis untuk memastikan bahwa mahasiswa kami tidak hanya memperoleh pengetahuan, tetapi juga mampu menerapkan keahlian yang relevan dengan dunia kerja. Saya berharap, dengan penyamaan persepsi ini, kita semua dapat memulai semester baru dengan semangat dan kesiapan yang matang,” tuturnya.",
            },
            {
                type: "text",
                value: "Sementara Koordinator penyusunan Dokumen Kurikulum MBKM OBE, Iib Marzuqi, menjelaskan bahwa kurikulum berbasis OBE ini dirancang untuk memaksimalkan potensi mahasiswa dalam mencapai hasil belajar yang diharapkan.",
            },
            {
                type: "text",
                value: "“Kurikulum OBE memberikan ruang bagi mahasiswa untuk tidak hanya memahami teori, tetapi juga menerapkan keterampilan praktis yang relevan di lapangan. Kami berharap, dengan kurikulum ini, lulusan Unisda akan lebih siap bersaing di dunia kerja dan mampu memberikan kontribusi nyata dalam masyarakat,” tuturnya.",
            },
            {
                type: "text",
                value: "Peluncuran kurikulum MBKM OBE menandai langkah maju dalam memastikan bahwa setiap program studi di Unisda telah sesuai dengan standar OBE dan siap diterapkan secara optimal.",
            },
            {
                type: "text",
                value: "Lebih lanjut Iib Marzuqi menyempaikan, agar kurikulum MBKM OBE berjalan dengan baik, seluru elemen mulai dari pimpinan Rektorat, Pasca, Fakultas, Biro, Lembaga, dan Kepala Bagian, mendapatkan panduan lengkap mengenai dokumen kurikulum berbasis OBE.",
            },
            {
                type: "text",
                value: "“Ini bertujuan untuk mempersiapkan seluruh elemen Unisda agar lebih siap dalam memulai tahun ajaran baru dan menjalankan kurikulum berbasis OBE dengan lebih tepat dan efektif,” ucapnya. [fak/suf]",
            },
        ],
    },
    {
        image: News46,
        date: "September 20, 2024",
        title: "PKKMB",
        link: "pkkmb-2024",
        content: [
            {
                type: "image",
                value: PKKMB2024,
            },
            {
                type: "textTitle",
                value: "Selamat Datang, Mahasiswa Baru Fakultas Ekonomi Universitas Islam Darul Ulum Lamongan!",
            },
            {
                type: "text",
                value: "Dengan penuh sukacita, kami menyambut kehadiran Anda sebagai mahasiswa baru di Fakultas Ekonomi Universitas Islam Darul Ulum Lamongan. Ini adalah langkah awal dari perjalanan panjang yang akan membawa Anda pada pengetahuan dan pengalaman baru. Di sini, Anda akan mendapatkan pendidikan yang tidak hanya berkualitas, tetapi juga berbasis pada nilai-nilai Islam yang akan membimbing Anda dalam menghadapi tantangan di dunia ekonomi.",
            },
            {
                type: "text",
                value: "Fakultas Ekonomi kami menawarkan berbagai program studi yang dirancang untuk mempersiapkan Anda menjadi profesional yang kompeten dan berintegritas. Selama masa studi, Anda akan dibekali dengan pengetahuan teoritis dan praktis yang mendalam, serta kesempatan untuk berinteraksi dengan para ahli dan praktisi di bidangnya. Jangan ragu untuk menggali potensi diri Anda dan memanfaatkan fasilitas serta sumber daya yang tersedia.",
            },
            {
                type: "text",
                value: "Kami percaya bahwa Anda adalah bagian dari perubahan dan kemajuan yang akan datang. Bersama-sama, mari kita ciptakan lingkungan akademik yang mendukung, inspiratif, dan penuh kolaborasi. Selamat berjuang, tingkatkan semangat belajar, dan jadilah agen perubahan di masyarakat. Selamat datang di Fakultas Ekonomi, semoga perjalanan ini membawa keberkahan dan kesuksesan bagi kita semua!",
            },
        ],
    },
    {
        image: News1,
        date: "September 6, 2024",
        title: "Yudisium Fakultas Ekonomi 2024",
        link: "yudisium-fakultas-ekonomi-2024",
        content: [
            {
                type: "text",
                value: "Lamongan – Fakultas Ekonomi (FE) Universitas Islam Darul ‘Ulum Lamongan kembali melaksanakan kegiatan Yudisium, pada Rabu, 04 September 2024.",
            },
            {
                type: "text",
                value: "Kegiatan Yudisium tersebut digelar di gedung rektorat Lt.3 UNISDA. Sebelum dilakukan prosesi yudisium, diawali dengan pembacaan ayat suci Al-Quran. Kemudian dilanjut dengan pembacaan nama – naam lulusan. Prodi Manajemen dan Akuntansi dibacakan oleh Wakil dekan bagian akademik yaitu Martha Laila Arisandra, S.E., M.M.",
            },
            {
                type: "image",
                value: Yudisium,
            },
            {
                type: "text",
                value: "Yudisium di fakultas ekonomi adalah proses resmi di mana mahasiswa dinyatakan lulus dan memenuhi syarat untuk mendapatkan gelar akademik. Berikut adalah deskripsi rinci mengenai prosesi yudisium di fakultas ekonomi:",
            },
            {
                type: "listt",
                value: [
                    {
                        title: "Persiapan Sebelum Yudisium",
                        items: [
                            {
                                subtitle: "Pendaftaran",
                                description:
                                    "Mahasiswa yang akan mengikuti yudisium harus mendaftar terlebih dahulu. Pendaftaran ini sering kali memerlukan pengajuan dokumen, seperti transkrip nilai, skripsi yang telah disetujui, dan formulir administrasi.",
                            },
                            {
                                subtitle: "Verifikasi Berkas",
                                description:
                                    "Fakultas akan memverifikasi kelengkapan berkas, termasuk pencapaian akademik dan administrasi yang diperlukan.",
                            },
                        ],
                    },
                    {
                        title: "Evaluasi Akhir",
                        items: [
                            {
                                subtitle: "Penilaian Skripsi",
                                description:
                                    "Skripsi atau tugas akhir mahasiswa akan dinilai oleh dosen pembimbing dan penguji. Penilaian ini mencakup kualitas riset, pemaparan, dan kemampuan analisis mahasiswa.",
                            },
                            {
                                subtitle: "Konsultasi Akademik",
                                description:
                                    "Jika diperlukan, mahasiswa dapat melakukan konsultasi dengan dosen untuk memastikan bahwa semua persyaratan akademik telah terpenuhi.",
                            },
                        ],
                    },
                    {
                        title: "Pelaksanaan Yudisium",
                        items: [
                            {
                                subtitle: "Pengumuman",
                                description:
                                    "Fakultas akan mengumumkan jadwal dan tempat yudisium. Biasanya, acara ini dilaksanakan di auditorium atau ruang pertemuan yang telah disiapkan.",
                            },
                            {
                                subtitle: "Acara Resmi",
                                description:
                                    "Yudisium biasanya dimulai dengan sambutan dari pejabat fakultas, seperti dekan atau wakil dekan. Di sini, mahasiswa akan mendapatkan penjelasan mengenai proses yudisium dan prosedur yang harus diikuti.",
                            },
                            {
                                subtitle: "Pembacaan Nama",
                                description:
                                    "Nama-nama mahasiswa yang dinyatakan lulus akan dibacakan secara resmi. Setiap nama yang dibacakan biasanya diikuti dengan pemaparan singkat mengenai pencapaian akademik mahasiswa tersebut.",
                            },
                        ],
                    },
                    {
                        title: "Penyerahan Sertifikat",
                        items: [
                            {
                                subtitle: "Sertifikat Yudisium",
                                description:
                                    "Setelah nama dibacakan, mahasiswa akan menerima sertifikat yudisium yang menyatakan bahwa mereka telah lulus dan memenuhi syarat untuk mendapatkan gelar.",
                            },
                            {
                                subtitle: "Penandatanganan Berkas",
                                description:
                                    "Beberapa fakultas mungkin memerlukan penandatanganan dokumen sebagai formalitas akhir sebelum mahasiswa dinyatakan resmi lulus.",
                            },
                        ],
                    },
                    {
                        title: "Rangkaian Acara Tambahan",
                        items: [
                            {
                                subtitle: "Foto Bersama",
                                description:
                                    "Biasanya diadakan sesi foto bersama antara mahasiswa yang lulus, dosen, dan pejabat fakultas sebagai kenang-kenangan.",
                            },
                            {
                                subtitle: "Perayaan",
                                description:
                                    "Setelah acara yudisium resmi, sering kali diadakan perayaan atau acara sosial untuk merayakan kelulusan, baik di tingkat fakultas atau bersama keluarga dan teman.",
                            },
                        ],
                    },
                    {
                        title: "Proses Administratif Pasca-Yudisium",
                        items: [
                            {
                                subtitle: "Pengurusan Ijazah",
                                description:
                                    "Setelah yudisium, mahasiswa dapat mengurus ijazah dan transkrip akademik resmi yang biasanya memerlukan waktu beberapa minggu.",
                            },
                            {
                                subtitle: "Registrasi di Alumni",
                                description:
                                    "Mahasiswa mungkin juga diminta untuk mendaftar sebagai anggota alumni fakultas.",
                            },
                        ],
                    },
                ],
            },
            {
                type: "text",
                value: "Seluruh proses ini dirancang untuk memastikan bahwa mahasiswa telah memenuhi semua persyaratan akademik dan administratif sebelum resmi dinyatakan lulus.",
            },
            {
                type: "text",
                value: "Setelah seluruh proses dilaksanakan tidak lupa penyampaian pesan dan kesan oleh peserta Yudisium Fakultas Ekonomi (FE), pesan dan kesan itu ditujukan untuk para Dosen dan Pimpinan Fakultas Ekonomi serta para peserta yang menghadiri acara prosesi Yudisium tersebut.",
            },
        ],
    },
    {
        image: News2,
        date: "Agustus 28, 2024",
        title: "MoU Southern Lyte State Univesity",
        link: "mou-southern-lyte-state-univesity",
        content: [
            {
                type: "text",
                value: "Memorandum Of Understanding Between Universitas Islam Darul ‘Ulum Southern Leyte State University",
            },
            {
                type: "text",
                value: "Tentang Tri Dharma Perguruan tinggi",
            },
            {
                type: "text",
                value: "Tri Dharma Perguruan Tinggi adalah konsep yang mendasari peran dan fungsi lembaga pendidikan tinggi di Indonesia. Konsep ini terdiri dari tiga poin penting:",
            },
            {
                type: "lisst",
                value: [
                    {
                        title: "Pendidikan dan Pengajaran",
                        items: "Perguruan tinggi bertanggung jawab untuk mencetak generasi unggul melalui pendidikan dan pengajaran yang berkualitas. Tujuannya adalah agar peserta didik mengembangkan potensi diri dalam kecerdasan, akhlak mulia, dan keterampilan yang dibutuhkan oleh masyarakat, bangsa, dan negara.",
                    },
                    {
                        title: "Penelitian dan Pengembangan",
                        items: "Penelitian merupakan proses menemukan konsep, teori, dan informasi dalam berbagai bidang ilmu pengetahuan, teknologi, dan seni. Perguruan tinggi berperan aktif dalam mengembangkan sumber daya manusia yang bermutu untuk memenuhi kebutuhan pembangunan.",
                    },
                    {
                        title: "Pengabdian Kepada Masyarakat",
                        items: "Perguruan tinggi juga wajib berkontribusi melalui pengabdian kepada masyarakat. Ini melibatkan penerapan ilmu pengetahuan dan teknologi untuk memecahkan masalah nyata dan meningkatkan kesejahteraan masyarakat.",
                    },
                ],
            },
            {
                type: "text",
                value: "Dengan menerapkan Tri Dharma ini, perguruan tinggi berkomitmen untuk menyajikan pendidikan yang berkualitas dan berperan dalam pembangunan bangsa.",
            },
            {
                type: "text",
                value: "Perguruan tinggi mengukur keberhasilan dalam menerapkan Tri Dharma melalui beberapa indikator dan metode evaluasi. Berikut adalah beberapa cara yang umum digunakan:",
            },
            {
                type: "listt",
                value: [
                    {
                        title: "Pendidikan dan Pengajaran",
                        items: [
                            {
                                subtitle: "Evaluasi Kinerja Dosen",
                                description:
                                    "Perguruan tinggi menilai kinerja dosen berdasarkan kualitas pengajaran, penelitian, dan pengabdian kepada masyarakat.",
                            },
                            {
                                subtitle: "Survei Mahasiswa",
                                description:
                                    "Mahasiswa memberikan umpan balik tentang pengalaman belajar mereka melalui survei kepuasan mahasiswa.",
                            },
                            {
                                subtitle: "Prestasi Akademik Mahasiswa",
                                description:
                                    "Tingkat kelulusan, IPK, dan partisipasi dalam kegiatan akademik menjadi indikator keberhasilan pendidikan.",
                            },
                        ],
                    },
                    {
                        title: "Penelitian dan Pengembangan",
                        items: [
                            {
                                subtitle: "Jumlah Publikasi Ilmiah",
                                description:
                                    "Perguruan tinggi mengukur produktivitas penelitian dengan melihat jumlah publikasi ilmiah yang dihasilkan oleh dosen dan mahasiswa.",
                            },
                            {
                                subtitle: "Pengakuan Internasional",
                                description:
                                    "Keberhasilan dalam memperoleh hibah penelitian, kolaborasi dengan lembaga internasional, dan partisipasi dalam konferensi ilmiah.",
                            },
                        ],
                    },
                    {
                        title: "Pengabdian Kepada Masyarakat",
                        items: [
                            {
                                subtitle: "Program Pengabdian Masyarakat",
                                description:
                                    "Perguruan tinggi mengevaluasi efektivitas program pengabdian masyarakat berdasarkan dampaknya pada masyarakat.",
                            },
                            {
                                subtitle:
                                    "Kemitraan dengan Industri dan Pemerintah",
                                description:
                                    "Kerjasama dengan sektor industri dan pemerintah juga menjadi indikator keberhasilan pengabdian.",
                            },
                        ],
                    },
                    {
                        title: "Penyerahan Sertifikat",
                        items: [
                            {
                                subtitle: "Sertifikat Yudisium",
                                description:
                                    "Setelah nama dibacakan, mahasiswa akan menerima sertifikat yudisium yang menyatakan bahwa mereka telah lulus dan memenuhi syarat untuk mendapatkan gelar.",
                            },
                            {
                                subtitle: "Penandatanganan Berkas",
                                description:
                                    "Beberapa fakultas mungkin memerlukan penandatanganan dokumen sebagai formalitas akhir sebelum mahasiswa dinyatakan resmi lulus.",
                            },
                        ],
                    },
                    {
                        title: "Rangkaian Acara Tambahan",
                        items: [
                            {
                                subtitle: "Foto Bersama",
                                description:
                                    "Biasanya diadakan sesi foto bersama antara mahasiswa yang lulus, dosen, dan pejabat fakultas sebagai kenang-kenangan.",
                            },
                            {
                                subtitle: "Perayaan",
                                description:
                                    "Setelah acara yudisium resmi, sering kali diadakan perayaan atau acara sosial untuk merayakan kelulusan, baik di tingkat fakultas atau bersama keluarga dan teman.",
                            },
                        ],
                    },
                    {
                        title: "Proses Administratif Pasca-Yudisium",
                        items: [
                            {
                                subtitle: "Pengurusan Ijazah",
                                description:
                                    "Setelah yudisium, mahasiswa dapat mengurus ijazah dan transkrip akademik resmi yang biasanya memerlukan waktu beberapa minggu.",
                            },
                            {
                                subtitle: "Registrasi di Alumni",
                                description:
                                    "Mahasiswa mungkin juga diminta untuk mendaftar sebagai anggota alumni fakultas.",
                            },
                        ],
                    },
                ],
            },
            {
                type: "text",
                value: "Ingatlah bahwa setiap perguruan tinggi dapat memiliki metode evaluasi yang berbeda, tergantung pada visi, misi, dan tujuan institusi.",
            },
            {
                type: "text",
                value: "Dalam implementasi Tri Dharma Perguruan Tinggi, mahasiswa memiliki peran penting yang mendukung ketiga poin tersebut. Berikut adalah beberapa contoh peran mahasiswa:",
            },
            {
                type: "listt",
                value: [
                    {
                        title: "Pendidikan dan Pengajaran",
                        items: [
                            {
                                subtitle: "Aktif dalam Pembelajaran",
                                description:
                                    "Mahasiswa berperan aktif dalam proses pembelajaran, mengikuti kuliah, tugas, dan diskusi dengan baik.",
                            },
                            {
                                subtitle: "Memberikan Umpan Balik",
                                description:
                                    "Mahasiswa dapat memberikan umpan balik konstruktif kepada dosen untuk meningkatkan kualitas pengajaran.",
                            },
                        ],
                    },
                    {
                        title: "Penelitian dan Pengembangan",
                        items: [
                            {
                                subtitle: "Berpartisipasi dalam Penelitian",
                                description:
                                    "Mahasiswa dapat terlibat dalam penelitian bersama dosen atau mengembangkan proyek penelitian mandiri.",
                            },
                            {
                                subtitle: "Menggali Topik Kajian",
                                description:
                                    "Mahasiswa dapat mengeksplorasi topik penelitian yang relevan dengan bidang studi mereka.",
                            },
                        ],
                    },
                    {
                        title: "Pengabdian Kepada Masyarakat",
                        items: [
                            {
                                subtitle: "Ikut Program Pengabdian",
                                description:
                                    "Mahasiswa dapat terlibat dalam program pengabdian masyarakat, seperti magang, pelatihan, atau kegiatan sosial.",
                            },
                            {
                                subtitle: "Berperan sebagai Agen Perubahan",
                                description:
                                    "Mahasiswa dapat mengaplikasikan ilmu pengetahuan dan keterampilan mereka untuk memecahkan masalah nyata di masyarakat.",
                            },
                        ],
                    },
                ],
            },
            {
                type: "text",
                value: "Ingatlah bahwa sinergi antara mahasiswa, dosen, dan seluruh sivitas akademika menciptakan ekosistem pembelajaran yang produktif. Dosen menjadi panutan, sedangkan mahasiswa menjadi agen yang menjalankan Tri Dharma Perguruan Tinggi secara nyata dalam masyarakat",
            },
            {
                type: "text",
                value: "Dalam implementasi Tri Dharma Perguruan Tinggi, perguruan tinggi berperan aktif dalam mendorong partisipasi mahasiswa dalam penelitian. Berikut beberapa contoh cara yang digunakan:",
            },
            {
                type: "lisst",
                value: [
                    {
                        title: "Program Penelitian Mahasiswa",
                        items: "Perguruan tinggi menyediakan program penelitian khusus untuk mahasiswa. Ini memungkinkan mereka terlibat langsung dalam proyek penelitian yang relevan dengan bidang studi mereka.",
                    },
                    {
                        title: "Bimbingan Dosen",
                        items: "Dosen memberikan bimbingan dan dukungan kepada mahasiswa yang tertarik melakukan penelitian. Mereka membantu merancang metodologi, mengumpulkan data, dan menganalisis hasil.",
                    },
                    {
                        title: "Kolaborasi dengan Dosen dan Sesama Mahasiswa",
                        items: "Mahasiswa dapat berkolaborasi dengan dosen atau sesama mahasiswa dalam penelitian. Ini memperluas wawasan dan memperkaya pengalaman penelitian.",
                    },
                    {
                        title: "Publikasi Hasil Penelitian",
                        items: "Perguruan tinggi mendorong mahasiswa untuk mempublikasikan hasil penelitian mereka. Ini memperkuat keterampilan akademik dan memperluas dampak penelitian.",
                    },
                ],
            },
            {
                type: "text",
                value: "Ingatlah bahwa partisipasi mahasiswa dalam penelitian tidak hanya memperkaya pengalaman akademik mereka, tetapi juga berkontribusi pada pengembangan ilmu pengetahuan secara keseluruhan.",
            },
        ],
    },
    {
        image: News3,
        date: "Agustus 26, 2024",
        title: "DPL Kampus Mengajar Angkatan 8",
        link: "dpl-kampus-mengajar-angkatan-8",
        content: [
            {
                type: "text",
                value: "SELAMAT DAN SUKSES",
            },
            {
                type: "text",
                value: "Kepada dosen UNISDA FE, FKIP, & FP Lolos seleksi Dosen Pembimbing Lapangan Kampus Mengajar Angkatan 8",
            },
            {
                type: "lisstt",
                value: [
                    "Ali Muhajir, M.M.  Fakultas Ekonomi Prodi Manajemen",
                    "Anita Dwi Hapsari, M.Pd. Fakultas Keguruan & Ilmu Pendidikan Prodi Pendidikan Bahasa Inggris",
                    "Diana Eka Kusumawati, S.P., M.P. Fakultas Pertanian Prodi Agroteknologi",
                ],
            },
        ],
    },
    {
        image: News4,
        date: "Agustus 24, 2024",
        title: "Temu Alumni",
        link: "temu-alumni",
        content: [
            {
                type: "text",
                value: "Lamongan – 23 Agustus 2024 Telah terselenggara kegiatan Temu Alumni Fakultas Ekonomi Universitas Islam Darul ‘Ulum Lamongan yang telah dihadiri Alumni Fakultas Ekonomi dari berbagi angkatan alumni, yang diadakan di taman Universitas Islam Darul Ulum Lamongan “Mengulang kenangan, mempererat persahabatan. #TemuAlumni” ",
            },
        ],
    },
    {
        image: News5,
        date: "Agustus 24, 2024",
        title: "Ziarah Wali",
        link: "ziarah-wali",
        content: [
            {
                type: "text",
                value: "Lamongan – Fakultas Ekonomi bersama keluarga besar Universitas Islam Darul Ulum Lamongan melasanakan ziarah wali yang di selenggarakan pada hari kamis tanggal 22 agustus 2024, ziarah wali tersebut di selenggarakan untuk mengertakan tali persaudaraan antara keluarga besar UNISDA.",
            },
            {
                type: "text",
                value: "Salah satu lokasi yang dituju adalah makam Presiden RI ke-4 Yaitu KH Abdurrahman Wahid, yang lebih dikenal sebagai Gus Dur, adalah salah satu tokoh paling berpengaruh dalam sejarah modern Indonesia. Berikut beberapa poin penting tentang kehidupannya:",
            },
            {
                type: "list",
                value: [
                    {
                        title: "Latar Belakang dan Pendidikan",
                        items: [
                            "Gus Dur lahir pada 7 September 1940 di Jombang, Jawa Timur1. Ia adalah putra dari KH Wahid Hasyim, seorang Menteri Agama pertama Indonesia, dan cucu dari KH Hasyim Asy’ari, pendiri Nahdlatul Ulama (NU).",
                            "Ia menempuh pendidikan di Universitas Al-Azhar di Kairo dan Universitas Baghdad, di mana ia mendalami studi Islam.",
                        ],
                    },
                    {
                        title: "Karier dan Kepemimpinan",
                        items: [
                            "Gus Dur menjadi Ketua Umum Nahdlatul Ulama (NU) pada tahun 1984 dan memimpin organisasi tersebut hingga 19992.",
                            "Ia mendirikan Partai Kebangkitan Bangsa (PKB) dan terpilih sebagai Presiden Indonesia ke-4 pada tahun 19992.",
                        ],
                    },
                    {
                        title: "Kepresidenan",
                        items: [
                            "Gus Dur menjadi Ketua Umum Nahdlatul Ulama (NU) pada tahun 1984 dan memimpin organisasi tersebut hingga 19992.",
                            "Ia mendirikan Partai Kebangkitan Bangsa (PKB) dan terpilih sebagai Presiden Indonesia ke-4 pada tahun 19992.",
                        ],
                    },
                    {
                        title: "Pengaruh dan Warisan",
                        items: [
                            "Gus Dur dikenal sebagai “Bapak Pluralisme” karena komitmennya terhadap toleransi dan keberagaman2.",
                            "Setelah meninggal pada 30 Desember 2009, Gus Dur dikenang sebagai tokoh yang memperjuangkan kemanusiaan dan keadilan sosial1.",
                        ],
                    },
                ],
            },
            {
                type: "text",
                value: "Gus Dur adalah sosok yang sangat dihormati dan dikenang karena kontribusinya dalam memperkuat nilai-nilai pluralisme dan demokrasi di Indonesia.",
            },
            {
                type: "text",
                value: "Ziarah wali adalah tradisi yang sangat dihormati di kalangan umat Muslim, terutama di Indonesia. Ziarah ini melibatkan kunjungan ke makam para wali, yang dikenal sebagai penyebar agama Islam di berbagai daerah. Berikut beberapa poin penting tentang ziarah wali",
            },
            {
                type: "lisst",
                value: [
                    {
                        title: "Tujuan Ziarah",
                        items: "Peziarah biasanya datang untuk berdoa, memohon berkah, dan mengenang jasa para wali dalam menyebarkan ajaran Islam. Mereka juga berharap mendapatkan ketenangan batin dan spiritual.",
                    },
                    {
                        title: "Makam Wali yang Dikunjungi",
                        items: "Beberapa makam wali yang terkenal di Indonesia antara lain makam Sunan Ampel di Surabaya, Sunan Giri di Gresik, dan Sunan Bonang di Tuban. Setiap makam memiliki sejarah dan cerita tersendiri yang menarik untuk dipelajari.",
                    },
                    {
                        title: "Tradisi dan Ritual",
                        items: "Selama ziarah, peziarah sering kali membaca doa-doa khusus, tahlil, dan yasin. Beberapa juga membawa bunga atau air untuk disiramkan di makam sebagai simbol penghormatan.",
                    },
                    {
                        title: "Manfaat Sosial dan Spiritual",
                        items: "Ziarah wali tidak hanya mempererat hubungan antar umat, tetapi juga menjadi momen refleksi spiritual. Banyak peziarah merasa lebih dekat dengan Tuhan dan mendapatkan inspirasi dari kehidupan para wali.",
                    },
                    {
                        title: "Waktu Ziarah",
                        items: "Ziarah biasanya dilakukan pada waktu-waktu tertentu, seperti menjelang bulan Ramadan, hari-hari besar Islam, atau hari-hari khusus yang berkaitan dengan wali tersebut.",
                    },
                ],
            },
            {
                type: "text",
                value: "Tradisi ini menunjukkan betapa kuatnya pengaruh para wali dalam kehidupan spiritual dan budaya masyarakat Indonesia.",
            },
        ],
    },
    {
        image: News6,
        date: "Agustus 23, 2024",
        title: "KKN Internasional",
        link: "kkn-internasional",
        content: [
            {
                type: "image",
                value: kknInternasional,
            },
            {
                type: "text",
                value: "Kuliah Kerja Nyata (KKN) merupakan salah satu bentuk tridharmaperguruan tinggi di bidang pengabdian yang rutin dilaksanakan setiap tahun oleh Lembaga Penelitian dan Pengabdian Masyarakat (LPPM) Universitas Islam Darul ‘Ulum (Unisda). Pada tahun 2024, sebanyak 19 mahasiswa dari 10 program studi yang berbeda diberangkatkan ke Thailand sebagai peserta KKN Internasional.",
            },
            {
                type: "text",
                value: "Keberangkatan KKN ke Thailand ini dilaksanakan pada Senin, 15 Juli 2024, dipimpin oleh Ketua LPPM Unisda, Dr. Ahmad Sholikin, S.IP., M.A., bersama Dr. Sauqi Futaqi, M.Pd.I, selaku Dosen Pembimbing Lapangan (DPL) bersam Dr. Novi Darmayanit, S.E., M.SA., Ak., CA Selau dekan Fakultas Ekonomi Mahasiswa tiba di Thailand pada 16 Juli 2024, dan acara penerimaan oleh pihak setempat dilaksanakan pada 17 Juli 2024.",
            },
            {
                type: "text",
                value: "Daftar mahasiswa Fakultas Ekonomi yang mengikuti KKN Internasional ini antara lain Nur Aisyah, Puput Melati, Eka Wahyuningtyas, Selvia Laely Dwi Astuti, Imroatus Sholihah, Ghina Anifah Khoirun Nisa, Algi Dwi Adi Tari.",
            },
            {
                type: "text",
                value: "Dr. Ahmad Sholikin menyampaikan terima kasih kepada pihak sekolah sebagai mitra dan berharap agar kerja sama ini dapat berlanjut secara konsisten. “Melalui kegiatan pengabdian bertaraf internasional ini, semoga kegiatan yang dilaksanakan dapat memberi manfaat kepada sekolah-sekolah penempatan serta menjadi pengalaman yang berharga bagi mahasiswa Unisda,” ujarnya, dalam rilis Unisda Lamongan, Kamis(18/7/2024).",
            },
        ],
    },
    {
        image: News7,
        date: "Agustus 21, 2024",
        title: "Sidang Skripsi",
        link: "sidang-skripsi",
        content: [
            {
                type: "text",
                value: "Sidang Skripsi Fakultas Ekonomi Unisda",
            },
            {
                type: "text",
                value: "Fakultas Ekonomi Universitas Islam Darul ‘Ulum Lamongan telah melaksanakan sidang skripsi",
            },
            {
                type: "text",
                value: "Sidang skripsi telah terlaksana pada hari senin dan selasa tanggal 12 dan 13 agustus 2024.",
            },
            {
                type: "image",
                value: SidangSkripsi,
            },
        ],
    },
    {
        image: News8,
        date: "Juli 25, 2024",
        title: "Focus Group Discussion (FGD) Manajemen",
        link: "focus-grup-discussion-manajemen",
        content: [
            {
                type: "textTitle",
                value: "Focus Group Disscusuion (FGD) Pendampingan Penyusunan Kurikulum Outcome Based Education (OBE) Program Studi S1 Manajemen Fakultas Ekonomi Universitas Islam Darul Ulum Lamongan",
            },
            {
                type: "text",
                value: "Pada hari Rabu Tanggal 24 Juli 2024 telah dilaksanakan focus group discussion (FGD) untuk pendampungan penyusunan kurikulum outcame based education atau OBE yang dilaksanakan di meeting room tanjung kodok resort (24-07-2024) waktu indonesia bagian barat. Pada acara focus group discussion (FGD) tersebut juga telah di laksanakan secara hikmat dan diharapkan menghasilkan sesuatu yang bermanfaat bagi prodi S1 Manajemen Fakultas Ekonomi Universitas Islam Darul Ulum Lamongan. Assoc Prof. Dr. Gancar Candra Premananto, CDM., CCC., QRCO., AIBIZ. yang merupakan Head of Management Department FEB UNAIR yang dipercaya sebagai pemateri untuk menjelaskan tentang kurikulum Outcome Based Education (OBE).",
            },
            {
                type: "image",
                value: FGDManajemen,
            },
        ],
    },
    {
        image: News9,
        date: "Juli 25, 2024",
        title: "Focus Group Discussion (FGD) Akuntansi",
        link: "focus-grup-discussion-akuntansi",
        content: [
            {
                type: "textTitle",
                value: "Focus Group Disscusuion (FGD) Pendampingan Penyusunan Kurikulum Outcome Based Education (OBE) Program Studi S1 Akuntansi Fakultas Ekonomi Universitas Islam Darul Ulum Lamongan",
            },
            {
                type: "text",
                value: "Pada hari Selasa Tanggal 23 Juli 2024 telah dilaksanakan focus group discussion (FGD) untuk pendampungan penyusunan kurikulum outcame based education atau OBE yang dilaksanakan di meeting room tanjung kodok resort (24-07-2024) waktu indonesia bagian barat. Pada acara focus group discussion (FGD) tersebut juga telah di laksanakan secara hikmat dan diharapkan menghasilkan sesuatu yang bermanfaat bagi prodi S1 Akuntansi Fakultas Ekonomi Universitas Islam Darul Ulum Lamongan. Dr. Zainal Fanani, S.E., M.SA., Ak. yang merupakan Dosen dari Universitas Airlangga Surabaya yang dipercaya sebagai pemateri untuk menjelaskan tentang kurikulum Outcome Based Education (OBE)",
            },
            {
                type: "image",
                value: FGDAkuntansi,
            },
        ],
    },
    {
        image: KuliahPraktisi,
        date: "Juli 16, 2024",
        title: "Kuliah Praktisi",
        link: "kuliah-praktisi",
        content: [
            {
                type: "text",
                value: "Kuliah Praktisi Fakultas Ekonomi bersama  PT. Plstindo",
            },
            {
                type: "text",
                value: 'Dengan Tema : "Internet of Think of Product di Perusaha"',
            },
            {
                type: "text",
                value: "Dengan Dosen Tamu : Awan Panjaitan, S.E., M.M",
            },
        ],
    },
    {
        image: KuliahPraktisiBSI,
        date: "Juli 16, 2024",
        title: "Kuliah Praktisi BSI",
        link: "kuliah-praktisi-bsi",
        content: [
            {
                type: "text",
                value: "Kuliah Praktisi Fakultas Ekonomi Prodi Manajemen Bersama Bank Syariah Indonesia (BSI)",
            },
            {
                type: "text",
                value: "Dengan tema : “Memperkuat Literasi dan Inklusi Keuangan Syariah pada GEnerasi Z”",
            },
            {
                type: "text",
                value: "yang di selenggarakan pada :",
            },
            {
                type: "text",
                value: "Hari : Kamis",
            },
            {
                type: "text",
                value: "Tanggal : 13 Juni 2024",
            },
        ],
    },
    {
        image: OfflineKuliahPraktisi,
        date: "Juni 26, 2024",
        title: "Offline Kuliah Praktisi",
        link: "offline-kuliah-praktisi",
        content: [
            {
                type: "text",
                value: "Offline Kuliah Praktisi BPS Kab. Lamongan, Potik Unisda, Fak. Ekonomi dan MIPA",
            },
            {
                type: "text",
                value: "“Sistem Statistik Nasional”",
            },
            {
                type: "text",
                value: "Bersama Narasumber : “Dicky HArryadi, S.E., M.E.” Statistik Ahli Madya BPS Kab. Lamongan",
            },
            {
                type: "text",
                value: "Pada Hari Rabu",
            },
            {
                type: "text",
                value: "Tanggal 26 Juni 2024",
            },
            {
                type: "text",
                value: "Pukul 10.00WIB",
            },
            {
                type: "text",
                value: "Gedung Fak. Ekonomi Lt.3",
            },
        ],
    },
    {
        image: News13,
        date: "Juni 26, 2024",
        title: "Pekan Ekonomi 2024",
        link: "pekan-ekonomi-2024",
        content: [
            {
                type: "image",
                value: Pekan1,
            },
            {
                type: "image",
                value: Pekan2,
            },
            {
                type: "textBox",
                value: [
                    "UPDATE!!",
                    "[OPEN REGISTRASION]",
                    "HMJ MANAJEMEN UNIVERSITAS ISLAM DARUL ‘ULUM LAMONGAN",
                    "Proudly Present",
                ],
            },
            {
                type: "textBox",
                value: [
                    "PEKAN EKONOMI 2024",
                    "✨Generasi digital yang kompetitif, kreatif, dan progresif, untuk menuju Indonesia emas 2045✨",
                    "💡CABANG LOMBA",
                    "#KATEGORI TIM",
                    "– DEBAT EKONOMI",
                    "– CERDAS CERMAT",
                    "– BUSINESS PLAN",
                    "#KATEGORI INDIVIDU",
                    "– RANGKING 1",
                    "📌TIMELINE PENDAFTARAN",
                    "Gelombang 1:",
                    "20 Mei – 31 Mei 2024",
                    "Gelombang 2:",
                    "01 Juni – 14 juni",
                ],
            },
            {
                type: "textBox",
                value: [
                    "❗️PELAKSANAAN❗️",
                    "📅: 23 Juni 2024",
                    "⏰: 07.00 – Selesai",
                    "📍:Universitas",
                    "Islam Darul ‘Ulum Lamongan",
                ],
            },
            {
                type: "textBox",
                value: [
                    "💸PEMBAYARAN,",
                    "BRI : 629501039472534",
                    "[A.Alfi Syahri Ramadlan]",
                    "DANA:0857-4550-7013",
                    "[Anggun Eny Ristiawaty]",
                ],
            },
            {
                type: "textBox",
                value: [
                    "PERSYARATAN:",
                    "✔️Siswa aktif jenjang SMK,SMA/MA",
                    "✔️1 Tim terdiri dari 3 orang/anggota untuk kategori tim",
                    "✔️Past foto berwarna 3×4 (3 lembar)",
                    "✔️Kartu Tanda Siswa/Surat Rekomendasi",
                    "✔️Bukti pembayaran",
                ],
            },
            {
                type: "textBox",
                value: [
                    "🎁 BENEFIT :",
                    "1. Trophy",
                    "2. Sertifikat Juara",
                    "3. Sertifikat Peserta,",
                    "4. Uang Pembinaan",
                    "5. Souvernir",
                    "6. ID Card",
                    "7. Snack",
                    "8. Minuman",
                ],
            },
            {
                type: "textBox",
                value: [
                    "🏆KATEGORI JUARA🏆",
                    "Juara Utama 1",
                    "Juara Utama 2",
                    "Juara Utama 3",
                ],
            },
            {
                type: "textBox",
                value: [
                    "⏩️ALUR PENDAFTARAN⏪️",
                    ">> Transfer Biaya Pendaftaran",
                    ">> Scan Bukti Biaya Pendaftaran",
                    ">> Mengisi Link Pendaftaran",
                    ">> Menerima Pemberitahuan Dari Panitia",
                ],
            },
            {
                type: "textBox",
                value: [
                    "💥PROMO!!💥",
                    "Daftar 10 slot maka free 1 slot (dari sekolah yang sama)",
                    "NB: KHUSUS UNTUK LOMBA RANGKING1",
                ],
            },
            {
                type: "textBox",
                value: [
                    "Kepoi dan Daftarkan diri kalian dengan mengisi link pendaftaran dibawah ini",
                    "•https://heylink.me/Pekan.ekonomi2024.hmj",
                    ".manajemen.unisdaContact Person (WA)",
                    "•BAHRUL ULUM: 085755634087",
                    "•AHMAD ADLAN: 085749890284",
                    "Ayo tunggu apalagi, buruan daftar ‼️",
                ],
            },
            {
                type: "text",
                value: "Jangan sampai kelewatan yaa, see you in PEKAN EKONOMI 🥰",
            },
            {
                type: "textBox",
                value: [
                    "#hmjmanajemen",
                    "#hmjmanajemenunisda",
                    "#eventjawatimur",
                    "#eventlamongan",
                    "#pekanekonomi",
                ],
            },
        ],
    },
    {
        image: News14,
        date: "Juni 18, 2024",
        title: "Sebagai Juara Harapan I",
        link: "sebagai-juara-harapan-I",
        content: [
            {
                type: "textBox",
                value: [
                    "SELAMAT DAN SUKSES KEPADA",
                    "Inayatul Kharista (22041028) Prodi Akuntansi",
                    "SEBAGAI HARAPAN I",
                    "Tangkai Lomba Dangdut Putri",
                    "Dalam Festival Seni Pertunjukan Indonesia",
                    "Universitas Negeri Jogjakarta 2024",
                ],
            },
        ],
    },
    {
        image: News15,
        date: "Juni 18, 2024",
        title: "Sebagai Juara II",
        link: "sebagai-juara-II",
        content: [
            {
                type: "textBox",
                value: [
                    "SELAMAT DAN SUKSES KEPADA",
                    "Finna Lathifatul Jannah (21051046) Prodi Akuntansi",
                    "SEBAGAI JUARA II",
                    "Tangkai Lomba Dangdut Putri",
                    "Dalam Perlombaan Poster IMAKO EXPO 2024",
                    "Oleh Ikatan Mahasiswa Pendidikan Ekonimi Universitas Jambi",
                ],
            },
            {
                type: "image",
                value: News15,
            },
        ],
    },
    {
        image: News16,
        date: "Mei 30, 2024",
        title: "Peraih Medali Emas",
        link: "peraih-medali-emas",
        content: [
            {
                type: "textBox",
                value: [
                    "Selamat",
                    "Elena Auliya (Prodi Akuntansi)",
                    "Sebagai Peraih Medali Emas",
                    "Pada : National science & Social Competition (@nssc.id) Dibawah Naungan CV. Divya Cahya",
                ],
            },
            {
                type: "image",
                value: News16,
            },
        ],
    },
    {
        image: News17,
        date: "Maret 21, 2024",
        title: "Pojok Pajak",
        link: "pojok-pajak",
        content: [
            {
                type: "text",
                value: "Selamat dan sukses atas kunjungan ibu kakanwil DJP 2 di Tax Center Unisda Lamongan",
            },
            {
                type: "image",
                value: PojokPajak,
            },
            {
                type: "image",
                value: PojokPajak2,
            },
        ],
    },
    {
        image: News18,
        date: "Februari 27, 2024",
        title: "KOMAKSI IX",
        link: "komaksi-IX",
        content: [
            {
                type: "text",
                value: "Olimpiade Akuntansi Tingkat SMA dan SMK sederajat se- jawa timur",
            },
            {
                type: "text",
                value: "Pada hari Sabtu Tanggal 24 Februari 2024 telah terlaksana olimpiade akuntansi tingkat SMA dan SMK sederajat sejawa timur yang diselenggarakan oleh Himpunan Mahasiswa Jurusan Akuntansi Fakultas Ekonomi Universitas Islam Darul’Ulum Lamongan, dan telah memunculkan juara – juara yang kompeten di bidang akuntansi tingkat SMA dan SMK sederajat. berikut ulasannya",
            },
            {
                type: "image",
                value: Omaksi,
            },
        ],
    },
    {
        image: WebinarInternasional,
        date: "Februari 21, 2024",
        title: "Webinar Internasional Bahas Dampak ESG pada Ekonomi Indonesia dan Malaysia",
        link: "webinar-internasional-bahas-dampak-ESG-pada-ekonomi-indonesia-dan-malaysia",
        content: [
            {
                type: "text",
                value: "Pada tanggal 17 Januari 2024, Fakultas Ekonomi Universitas Islam Darul Ulum (UNISDA) Lamongan menyelenggarakan webinar internasional bertajuk “The Impact Of ESG on Indonesia Malaysia Economy.” Kegiatan ini dihadiri oleh mahasiswa, praktisi, dan dosen dari berbagai kalangan sebagai upaya pemahaman lebih dalam terkait Environmental, Social, and Governance (ESG) dalam konteks ekonomi Indonesia dan Malaysia.",
            },
            {
                type: "text",
                value: "Dekan Fakultas Ekonomi UNISDA Lamongan, Dr. Novi Darmayanti, SE, MSA, AK, CA, membuka secara resmi kegiatan webinar ini. Narasumber yang dihadirkan dalam webinar ini merupakan dua ahli dan profesional ekonomi dari Malaysia dan Indonesia.",
            },
            {
                type: "text",
                value: "Narasumber pertama, Dr. Amira Jamil, seorang dosen dari Fakultas Ekonomi dan Bisnis University Malaysia Kelantan, membahas “Dampak ESG pada Ekonomi Indonesia dan Malaysia.” Dr. Amira menggarisbawahi pentingnya integrasi praktik ESG dalam kebijakan dan operasi ekonomi kedua negara untuk mencapai pertumbuhan ekonomi yang berkelanjutan dan inklusif.",
            },
            {
                type: "text",
                value: "Dalam konteks lingkungan, Indonesia dan Malaysia dihadapkan pada tantangan pelestarian keanekaragaman hayati dan sumber daya alam yang melimpah. Dr. Amira menekankan bahwa praktik ESG yang fokus pada pelestarian lingkungan dapat membantu mengurangi dampak negatif industri ekstraktif dan mendukung pembangunan berkelanjutan.",
            },
            {
                type: "text",
                value: "Aspek sosial ESG juga menjadi sorotan, dengan penekanan pada upaya meningkatkan kesejahteraan masyarakat, memperbaiki ketidaksetaraan, mendukung pendidikan, dan memastikan kondisi kerja yang aman. Dr. Amira menyoroti perlunya kerja sama antara perusahaan dan pemerintah untuk menciptakan dampak positif dalam masyarakat.",
            },
            {
                type: "text",
                value: "Selain itu, tata kelola perusahaan yang baik juga menjadi fokus dalam penerapan ESG. Prinsip-prinsip transparansi, akuntabilitas, dan partisipasi pemangku kepentingan dianggap kunci untuk memastikan manajemen yang efisien dan etis.",
            },
            {
                type: "text",
                value: "Narasumber kedua, Moh. Azuz Shony azar, SE., MM., dari Fakultas Ekonomi UNISDA Lamongan, membahas “Manajemen ESG.” Beliau menyoroti pentingnya integrasi prinsip-prinsip ESG dalam keputusan strategis dan operasional perusahaan.",
            },
            {
                type: "text",
                value: "Manajemen ESG melibatkan pemahaman mendalam tentang risiko dan peluang yang terkait dengan aspek Lingkungan, Sosial, dan Tata Kelola Perusahaan. Moh. Azuz menekankan bahwa perusahaan perlu mengidentifikasi dan mengelola dampak lingkungan dari kegiatan operasional mereka, termasuk pengelolaan limbah dan emisi karbon.",
            },
            {
                type: "text",
                value: "Dalam aspek sosial, perusahaan perlu memastikan keberlanjutan dalam praktik tenaga kerja, menyediakan pelatihan, dan memastikan kondisi kerja yang aman dan sehat. Tata kelola perusahaan yang baik, melibatkan transparansi, etika bisnis, dan partisipasi pemangku kepentingan, juga menjadi kunci dalam manajemen ESG.",
            },
            {
                type: "text",
                value: "Moh. Azuz menegaskan bahwa manajemen ESG bukan hanya tanggung jawab etika, tetapi juga merupakan strategi bisnis yang cerdas. Perusahaan yang berfokus pada ESG dapat membangun keberlanjutan jangka panjang, meminimalkan risiko, dan menciptakan nilai tambah bagi masyarakat dan lingkungan sekitarnya.",
            },
            {
                type: "text",
                value: "Kegiatan webinar ini memberikan wawasan mendalam bagi para peserta terkait dampak ESG pada ekonomi Indonesia dan Malaysia, serta strategi manajemen ESG yang dapat diterapkan oleh perusahaan untuk mencapai keberlanjutan dan tanggung jawab sosial.",
            },
        ],
    },
    {
        image: News20,
        date: "Februari 19, 2024",
        title: "Conference Internasional",
        link: "conference-internasional",
        content: [
            {
                type: "text",
                value: "Are Company Size, Debt, Profitability, and Managerial Ownership Influence Income Smoothing Before and After Covid-19",
            },
            {
                type: "text",
                value: "Dr. Novi Darmayanti, SE, MSA, Ak,CA, are keynotes speakers in Conference International @ Malaysia are presented UKM with Unisda , she is tell about  financial accounting, she is article company size, debt, profitability, and managerial ownership influencing income smoothing before and after COVID 19.",
            },
            {
                type: "text",
                value: "Factors such as Company Size, Debt, Profitabily, and Managerial Ownership have a significant influence on income smoothing practices both before and after the Covid-19",
            },
            {
                type: "text",
                value: "This shows the importance of these factor in corporate financial management and managerial decisions regarding earning reporting. With a batter understanding of how these factors effect income smoothing practices, companies can take more appropriate steps in managing their finance.",
            },
            {
                type: "image",
                value: ConferenceInternasional,
            },
            {
                type: "image",
                value: Conference1,
            },
            {
                type: "image",
                value: Conference2,
            },
            {
                type: "image",
                value: Conference3,
            },
        ],
    },
    {
        image: News21,
        date: "Februari 16, 2024",
        title: "Lolos Program MSIB Tahun 2024",
        link: "lolos-program-msib-tahun-2024",
        content: [
            {
                type: "text",
                value: "Keluarga Besar",
            },
            {
                type: "text",
                value: "Civitas Akademik",
            },
            {
                type: "text",
                value: "Keluarga Besar",
            },
            {
                type: "text",
                value: "Universitas Islam Darul’Ulum Lamongan",
            },
            {
                type: "text",
                value: "Mengucapkan",
            },
            {
                type: "text",
                value: "SELAMAT DAN SUKSES",
            },
            {
                type: "text",
                value: "Kepada dosen Unisda Lamongan",
            },
            {
                type: "text",
                value: "LOLOS PROGRAM MSIB TAHUN 2024",
            },
            {
                type: "text",
                value: "“Magang dan Studi Independen Bersertifikat”",
            },
            {
                type: "lisstt",
                value: [
                    "Ali Muhajir, SE., M.M",
                    "Isnaini Anniswati R, S.E., M.Pd",
                ],
            },
            {
                type: "image",
                value: MSIB2024,
            },
        ],
    },
    {
        image: komaksi2024,
        date: "Februari 10, 2024",
        title: "UPDATE!! [OPEN REGISTRASION]",
        link: "komaksi-IX-2024",
        content: [
            {
                type: "textBox",
                value: [
                    "HMJ AKUNTANSI UNIVERSITAS ISLAM DARUL ‘ULUM LAMONGAN",
                    "🔥Proudly Present🔥",
                ],
            },
            {
                type: "textBox",
                value: [
                    "KOMAKSI (Kompetisi Akuntansi) IX 2024",
                    "✨ Revitalisasi Akuntansi Dalam Uneven Recovery Economy Menuju Financial Freedom✨",
                ],
            },
            {
                type: "textBox",
                value: [
                    "📌 TIMELINE PENDAFTARAN 📌",
                    "Gelombang 1 : 10 – 31 Januari 2024",
                    "Gelombang 2 : 01 – 20 Februari 2024",
                ],
            },
            {
                type: "textBox",
                value: [
                    "❗PELAKSANAAN ❗",
                    "📅 : 24 Februari 2024",
                    "⏰ : 08.00 – selesai",
                    "📍 : Auditorium Gedung Rektorat Lt.3 Universitas Islam Darul ‘Ulum Lamongan",
                    "📝 : Babak penyisihan > Semi Final > Final",
                ],
            },
            {
                type: "textBox",
                value: [
                    "💸 PEMBAYARAN :",
                    "BRI : 630101032027537 (Via Hidahyatul Husna)",
                    "DANA : 089521700988 (Amellia Nova)",
                ],
            },
            {
                type: "textBox",
                value: [
                    "📑 PERSYARATAN :",
                    "✓ Siswa aktif jenjang SMK, SMA/MA",
                    "✓ 1 Tim terdiri dari 3 orang/anggota",
                    "✓ Past foto berwarna 3×4 (3 lembar)",
                    "✓ Kartu Tanda Siswa/Surat Rekomendasi",
                    "✓ Bukti pembayaran",
                ],
            },
            {
                type: "textBox",
                value: [
                    "🎁 BENEFIT :",
                    "1. Trophy",
                    "2. Sertifikat Juara",
                    "3. Sertifikat Peserta",
                    "4. Uang Pembinaan",
                    "5. Souvernir",
                    "6. Stiker",
                    "7. ID Card",
                    "8. Snack",
                    "9. Minuman",
                    "10. ATK",
                ],
            },
            {
                type: "textBox",
                value: [
                    "🏆 KATEGORI JUARA 🏆",
                    "Juara Utama 1",
                    "Juara Utama 2",
                    "Juara Utama 3",
                    "Juara Harapan 1",
                    "Juara Harapan 2",
                ],
            },
            {
                type: "textBox",
                value: [
                    "⏩ ALUR PENDAFTARAN ⏪",
                    ">> Transfer Biaya Pendaftaran",
                    ">> Scan Bukti Biaya Pendaftaran",
                    ">> Mengisi Link Pendaftaran",
                    ">> Menerima Pemberitahuan Dari Panitia",
                ],
            },
            {
                type: "textBox",
                value: [
                    "💥PROMO!!💥",
                    "Daftar 3 TIM atau lebih, maka free 1 TIM",
                    "(dari sekolah yg sama)",
                ],
            },
            {
                type: "textBox",
                value: [
                    "Daftarkan diri kalian dengan mengisi link pendaftaran dibawah ini👇🏻",
                    "https://bit.ly/FormulirPendaftaranKOMAKSIIX2024",
                ],
            },
            {
                type: "text",
                value: "Ayo tunggu apalagi, buruan daftar!!!",
            },
            {
                type: "text",
                value: "Jangan sampai kelewatan yaa, see you in KOMAKSI😍",
            },
        ],
    },
    {
        image: News23,
        date: "Februari 9, 2024",
        title: "Pengabdian Masyarakat dosen Unisda",
        link: "pengabdian-masyarakat-dosen-unisda",
        content: [
            {
                type: "text",
                value: "Dosen Fakultas Ekonomi Unisda melakukan pengabdian masyarakat Nasional bekerjasama dengan BBPG JawaTimur dan Diknas Kab. Pasuruan dengan narasumber dosen FE Unisda, Dr Radian Sri Rama, M.SA",
            },
            {
                type: "image",
                value: pengmas2024,
            },
        ],
    },
    {
        image: News24,
        date: "Januari 18, 2024",
        title: "Menuju SDG’s 2030, Perkuat Peran Perempuan Melalui PSW",
        link: "menuju-sdgs-2030-perkuat-peran-perempuan-melalui-psw",
        content: [
            {
                type: "text",
                value: "Pusat Studi Wanita (PSW) Universitas Islam Darrul Ulum telah resmi di Launching bersamaan digelarnya Seminar di Gedung Sabudga Lamongan, Rabu (17/1).",
            },
            {
                type: "text",
                value: "Hal tersebut menjadi langkah untuk mengoptimalisasi kiprah wanita dalam menuju SDG’s 2030.",
            },
            {
                type: "text",
                value: "Pusat study yang dioperasikan oleh Lembaga Penelitian dan Pengabdian Masyarakat, Universitas Darul Ulum Lamongan ini menjadi momen bersejarah.",
            },
            {
                type: "text",
                value: "Sebab, Para akademisi bersama Gabungan Organisasi Wanita (GOW) Lamongan yang dipimpin oleh Ibu Wakil Bupati, Narti Abdul Rouf juga melibatkan diri bersama 1.251 peserta kaum perempuan.",
            },
            {
                type: "text",
                value: "Wakil RektorBidang Akademik, Kerjasama, Penelitian, dan Pengabdian Masyarakat Unisda Dra. Hj. Khotimah Suryani berharap pembentukan Pusat Studi Wanita (PSW) tersebut menjadi wadah untuk merespons berbagai isu gender dan memobilisasi sumber daya intelektual dari berbagai disiplin ilmu untuk mendukung solusi ilmiah terhadap permasalahan gender.",
            },
            {
                type: "text",
                value: "Hadir dalam Seminar, Penasihat dan Sekretaris Lembaga Pendidikan Islam dan Sosial Dr. Hj. Erna Mastiningrum mengajak semua pihak untuk mendukung perempuan agar semakin berdaya dan terlibat aktif dalam pengambilan keputusan.",
            },
            {
                type: "text",
                value: "Wanita yang maju sebagai Caleg DPR RI dari Partai Perindo ini juga menyoroti keterwakilan perempuan dalam pemilu yang masih rendah, serta tantangan kekerasan terhadap anak dan perempuan di Lamongan.",
            },
            {
                type: "text",
                value: "Sementara itu beberapa nara sumber yang hadir dari dekan MIPA Dr. HJ siti Amiroch danDr. Novi Darmayanti menekankan pentingnya keberadaan perempuan dalam dunia digital dan ekonomi yang memberikan peluang besar untuk berkontribusi pada perubahan positif.",
            },
            {
                type: "text",
                value: "Meski demikian, peran perempuan dalam mendukung tujuan pembangunan berkelanjutan masih belum optimal.",
            },
            {
                type: "image",
                value: psw,
            },
            {
                type: "text",
                value: "“Diskriminasi dan kerentanan perempuan terhadap berbagai tindakan diskriminatif menuntut pembangunan yang mengintegrasikan perspektif gender sebagai akselerator pencapaian Tujuan Pembangunan Berkelanjutan,” terangnya.",
            },
            {
                type: "text",
                value: "Sedangkan, Dr Hj Siti Afiyah, MH, dari Fakultas Hukum menegaskan bahwa hukum melindungi semua perempuan di setiap aspek kehidupan, sementara Dr. Hj. Siti Amiroch, M.Si, menggarisbawahi peran wanita sebagai agen perubahan dalam optimalisasi SDG’s.",
            },
            {
                type: "text",
                value: "Dengan digelarnya Launching dan Seminar Pusat Studi Wanita UNISDA, diharapkan berkontribusi pada pengembangan wawasan dan pengetahuan gunq mendorong perempuan untuk lebih aktif berpartisipasi dalam masyarakat menuju masa depan yang lebih inklusif.",
            },
        ],
    },
    {
        image: News25,
        date: "Januari 18, 2024",
        title: "LPIS Dorong Perempuan Semakin Aktif Terlibat dalam Pengambilan Keputusan",
        link: "lpis-dorong-perempuan-semakin-aktif-terlibat-dalam-pengambilan-keputusan",
        content: [
            {
                type: "text",
                value: "Hal itu disampaikan oleh Erna Mastiningrum sekretaris Lembaga Pendidikan Islam dan Sosial (LPIS) Darul Ulum, dalam Launching dan Seminar Nasional Pusat Studi Wanita (PSW), yang digelar oleh Lembaga Penelitian dan Pengabdian Masyarakat, Universitas Darul Ulum, tdi Gedung Sabudga Universitas Islam Darul Ulum (Unisda), Rabu (17/1/2024).",
            },
            {
                type: "text",
                value: "Seminar yang mengambil tema “Optimalisasi Kiprah Wanita Menuju SDG’s 2030” Erna menyoroti keterwakilan perempuan dalam pemilu 2019 di DPR RI yang masih rendah serta tantangan kekerasan terhadap anak dan perempuan di Lamongan.",
            },
            {
                type: "text",
                value: "“Kita harus terus dorong perempuan untuk selalu terlibat dalam kebijakan, salah satunya harus bisa duduk di parlemen, karena dengan begitu kepentingan perempuan bisa terealisasi,” ujarnya.",
            },
            {
                type: "text",
                value: "Erna berharap partisipasi politik dari perempuan semakin meningkat, walaupun saat ini sudah ada peningkatan dari 18% menjadi hampir 22% yang menurutnya itu suatu kemajuan, akan tetapi masih jauh dari target yaitu 30%. “Kita berharap mungkin di Pemilu 2024 partisipasi politik perempuan dan juga keterwakilan perempuan di dalam Parlemen itu semakin meningkat,” harapnya.",
            },
            {
                type: "text",
                value: "Hj Khotimah Suryani, Wakil Rektor Bidang Akademik, Kerjasama, Penelitian, dan Pengabdian Masyarakat Unisda menyampaikan harapannya terkait pembentukan Pusat Studi Wanita (PSW) ini, agar menjadi wadah yang mampu merespons berbagai isu gender, dan memobilisasi sumber daya intelektual, dari berbagai disiplin ilmu untuk mendukung solusi ilmiah terhadap permasalahan gender.",
            },
            {
                type: "text",
                value: "Hj. Siti Afiyah Dekan Fakultas Hukum dalam seminar itu menegaskan bahwa hukum melindungi semua perempuan di setiap aspek kehidupan. Sementara Hj. Siti Amiroch, menggarisbawahi peran wanita sebagai agen perubahan dalam optimalisasi SDG’s. Ia menekankan pentingnya keberadaan perempuan dalam dunia digital yang memberikan peluang besar untuk berkontribusi pada perubahan positif.",
            },
            {
                type: "text",
                value: "Meski demikian, peran perempuan dalam mendukung tujuan pembangunan berkelanjutan masih belum optimal. Diskriminasi dan kerentanan perempuan terhadap berbagai tindakan diskriminatif menuntut pembangunan yang mengintegrasikan perspektif gender sebagai akselerator pencapaian Tujuan Pembangunan Berkelanjutan.",
            },
            {
                type: "text",
                value: "Dengan digelarnya Launching dan Seminar Pusat Studi Wanita UNISDA, diharapkan kontribusi wawasan dan pengetahuan ini mendorong perempuan untuk lebih aktif berpartisipasi dalam masyarakat menuju masa depan yang lebih inklusif.",
            },
            {
                type: "text",
                value: "Seminar nasional kali ini menghadirkan berbagai organisasi wanita di Lamongan serta Gabungan Organisasi Wanita (GOW) yang dipimpin oleh istri Wakil Bupati, Ny. Narti Abdul Rouf.",
            },
            {
                type: "text",
                value: "Momen bersejarah ini tidak hanya dihadiri oleh para akademisi dan mahasiswa Unisda, namun juga melibatkan berbagai organisasi wanita di Lamongan serta Gabungan Organisasi Wanita (GOW) yang dipimpin oleh istri Wakil Bupati, Ny. Narti Abdul Rouf. Dalam rangkaian acara ini, sebanyak 1.251 peserta hadir, terdiri dari masyarakat umum dan khususnya perempuan.",
            },
            {
                type: "image",
                value: lpis,
            },
        ],
    },
    {
        image: News26,
        date: "Januari 15, 2024",
        title: "Olimpiade Akuntansi",
        link: "olimpiade-akuntansi",
        content: [
            {
                type: "text",
                value: "Komaksi Kompetisi Akuntansi “Meningkatkan Kompetensi Calon Akuntan Muda Yang Kompetitif, Cerdas dan Profesional”",
            },
        ],
    },
    {
        image: News27,
        date: "Januari 15, 2024",
        title: "Pembekalan DPL PKL FE",
        link: "pembekalan-dpl-pkl-fe",
        content: [
            {
                type: "text",
                value: "Kegiatan pembekalan Dosen Pembimbing Lapangan (DPL) Praktek Kerja Lapngan (PKL) Fakultas Ekonomi Universitas Islam Darul’Ulum Lamongan",
            },
            {
                type: "text",
                value: "Pembekalan DPL PKL adalah singkatan dari Pembekalan Praktek Kerja Lapangan. Ini adalah kegiatan akademik yang dilakukan oleh mahasiswa FTP dalam menyelesaikan studinya. PKL berbentuk praktek kerja yang menekankan aspek kognitif dan psikomotorik. Waktu PKL minimal 20 hari dengan 8 jam kerja per hari. Pembekalan merupakan aktivitas pemberian materi umum terkait PKL sebagai bekal awal mahasiswa melaksanakan PKL di mitra. Pembekalan merupakan syarat wajib pelaksanaan PKL. Logsheet adalah lembar kerja yang berisi aktivitas kerja mahasiswa yang diketahui dan ditandatangani oleh pembimbing lapang dan dosen pembimbing. Bobot SKS dan Komponen Penilaian 2 SKS. Pelaksanaan PKL dianjurkan pada masa liburan antar semester dan atau sesuai kesepakatan dengan perusahaan. Jika terpaksa dilakukan pada masa perkuliahan (bukan libur antar semester), maka perlu izin tertulis oleh pembimbing dan dosen pengasuh MK yang diikuti peserta PKL dengan syarat 20 hari kerja terpenuhi. Jika hasil monitoring atau laporan perusahaan, mahasiswa dinilai tidak memenuhi persyaratan, maka PD I atas usul dari Panitia PKL dan atau Dosen Pembimbing memberi nilai E pada kegiatan PKL mahasiswa.",
            },
            {
                type: "text",
                value: "Tujuan dari Pembekalan Praktek Kerja Lapangan (PKL) adalah memberikan mahasiswa FTP bekal awal untuk melaksanakan PKL di mitra. Pembekalan merupakan syarat wajib pelaksanaan PKL dan berisi materi umum terkait PKL. Selain itu, tujuan PKL adalah sebagai berikut:",
            },
            {
                type: "lisstt",
                value: [
                    "Mengenal penerapan ilmu Teknologi Pertanian di perusahaan/instansi secara nyata melalui kerja fisik sesuai aktivitas di perusahaan/instansi.",
                    "Membandingkan ilmu pengetahuan yang didapat dengan yang diterapkan di lapang dan menelaahnya apabila terjadi perbedaan atau penyesuaian.",
                    "Melatih mahasiswa untuk bekerja mandiri dan bekerjasama sekaligus berlatih menyesuaikan diri dengan kondisi lapangan pekerjaan.",
                    "Menambah wawasan mahasiswa secara luas.",
                ],
            },
            {
                type: "image",
                value: PembekalanDPLPKLFE,
            },
        ],
    },
    {
        image: News28,
        date: "Januari 15, 2024",
        title: "Guest Lecturer",
        link: "guest-lecturer",
        content: [
            {
                type: "text",
                value: "Fakultas Ekonomi Universitas Islam Darul’Ulum Lamongan Present :",
            },
            {
                type: "text",
                value: "Guest Lecturer “The Impact of ESG on Indonesia – Malaysia Economy”",
            },
            {
                type: "text",
                value: "Held in 17 januari 2024 02.00 (GTM +8) / 13.00 WIB",
            },
            {
                type: "text",
                value: "ESG (Environmental, Social, and Governance) is a top business priority in Indonesia, with a growing incorporation of ESG principles globally, although challenges persist. This was accelerated during the pandemic, with 79% of APAC investors significantly or moderately increasing ESG investments by Q3 2020, according to MSCI research . The Indonesian government has been proactive in working to create the conditions and necessary enablers for a smooth transition towards ESG and the UN SDGs, aligned with the country’s development agenda . Harmonised standards will enable reporting, while technology can accelerate ESG achievement . Indonesia’s digital economy will remain a key driver of inclusive growth in the coming years, with almost three-quarters of the population connected, digital tools can widen access to health care, education and employment.",
            },
            {
                type: "text",
                value: "In Malaysia, ESG is also an increasing focus for global and domestic investors. Southeast Asia has experienced rapid economic growth and urbanisation in recent years. As a result, there is a growing demand for sustainable and responsible investments. The Malaysian government has taken several initiatives to promote ESG investments, including the launch of the Sustainable and Responsible Investment (SRI) sukuk framework in 2014 . The SRI sukuk framework is a set of guidelines for the issuance of Islamic bonds that are compliant with Shariah law and promote sustainable and responsible investments .",
            },
            {
                type: "text",
                value: "II hope this information helps. Let me know if you have any other questions.",
            },
            {
                type: "image",
                value: GuestLecurer,
            },
        ],
    },
    {
        image: News29,
        date: "Januari 15, 2024",
        title: "Lolos Pertukaran Mahasiswa Merdeka",
        link: "lolos-pertukaran-mahasiswa-merdeka",
        content: [
            {
                type: "text",
                value: "Keluarga Besar Civitas Akademik Universitas Islam Darul’Ulum (UNISDA) Lamongan Mengucapkan",
            },
            {
                type: "text",
                value: "SELAMAT DAN SUKSES",
            },
            {
                type: "text",
                value: "Atas Lolosnya Pertukaran Mahasiswa Merdeka Batch 3 Tahun 2023 Outbound Unisda Lamongan",
            },
            {
                type: "lisstt",
                value: [
                    "M. Rizky Maulana dari Prodi Ilmu Hukum Fakultas Hukum di Universitas Internasional Batam",
                    "Imroatus Sholohah dari Prodi Akuntansi Fakultas Ekonomi di Universitas Lambung Mangkurat, Banjarmasin Kalimantan Selatan",
                    "Elena Auliya dari Prodi Akuntansi Fakultas Ekonomi di Universitas Teknokrat Indonesia",
                    "Eni Nur Layli dari Prodi Akuntansi Fakultas Ekonomi di Universitas Teknokrat Indonesia",
                ],
            },
            {
                type: "image",
                value: LolosPertukaranMahasiswaMerdeka,
            },
        ],
    },
    {
        image: News30,
        date: "Januari 15, 2024",
        title: "Lolos Seleksi DPL",
        link: "lolos-seleksi-dpl",
        content: [
            {
                type: "text",
                value: "Selamat dan Sukses Kepada Dosen FKIP, FAI dan FE Universitas Islam Darul’Ulum Lamongan Telah Lolos Seleksi Sebagai Dosen Pembimbing Lapangan (DPL) Kampus Mengajar Angkatan 6",
            },
            {
                type: "image",
                value: LolosSeleksiDPL,
            },
        ],
    },
    {
        image: News31,
        date: "Januari 15, 2024",
        title: "Seminar Internasional",
        link: "seminar-internasional",
        content: [
            {
                type: "text",
                value: "Internasional Seminar Universitas Islam Darul’Ulum  UNISDA Lamongan 2023 whit the theme “Enhancing Green Economy and Collaborative Business in The Digital Era” will be held on :",
            },
            {
                type: "text",
                value: "Monday, 11 September 2023, at 08.00 – 12.00 WIB 3rd Floor Hall, Rectorate Building, Unisda Lamongan",
            },
        ],
    },
    {
        image: News32,
        date: "Januari 15, 2024",
        title: "Lolos Beasiswa Kemendikbudristek ICE 2023",
        link: "lolos-beasiswa-kemendikbudristek-ice-2023",
        content: [
            {
                type: "text",
                value: "Keluarga Besar Civitas & Akademik Universitas Islam Darul’Ulum Lamongan Mengucapkan SELAMAT DAN SUKSES Kepada Dosen UNISDA atas lolosnya sebagai Penerima Beasiswa Kemendikbudristek ICE Institute Batch 4 Semester 2023 Mata Kuliah Nasional dan Mata Kuliah Internasional.",
            },
            {
                type: "text",
                value: "Selamat dan Sukses :",
            },
            {
                type: "lisst",
                value: [
                    {
                        items: "Dr. Novi Darmayanti, SE., M.SA., Ak., CA",
                    },
                    {
                        items: "Iib Marzuqi, M.Pd",
                    },
                ],
            },
            {
                type: "image",
                value: LolosBeasiswaKemendikbudristek2023,
            },
        ],
    },
    {
        image: News33,
        date: "Januari 15, 2024",
        title: "Lolos Program MSIB Tahun 2023",
        link: "lolos-program-msib-tahun-2023",
        content: [
            {
                type: "text",
                value: "Keluarga Besar",
            },
            {
                type: "text",
                value: "Civitas Akademik",
            },
            {
                type: "text",
                value: "Universitas Islam Darul’Ulum Lamongan",
            },
            {
                type: "text",
                value: "Mengucapkan",
            },
            {
                type: "text",
                value: "SELAMAT DAN SUKSES",
            },
            {
                type: "text",
                value: "Kepada dosen Unisda Lamongan",
            },
            {
                type: "text",
                value: "LOLOS PROGRAM MSIB TAHUN 2023",
            },
            {
                type: "text",
                value: "“Magang dan Studi Independen Bersertifikat”",
            },
            {
                type: "lisstt",
                value: ["Ali Muhajir, SE., M.M", "Siti Soimah, S.AB., M.AB"],
            },
            {
                type: "image",
                value: LolosProgramMSIB2023,
            },
        ],
    },
    {
        image: News34,
        date: "Januari 15, 2024",
        title: "Pembekalan PKL FE UNISDA",
        link: "pembekalan-pkl-fe-unisda",
        content: [
            {
                type: "text",
                value: "Pembekalan Praktek Kerja Lapangan (PKL) Fakultas Ekonomi Universitas Islam Darul’Ulum (UNISDA) Lamongan guna Kematangan Turun Lapangan",
            },
            {
                type: "text",
                value: "Fakultas Ekonomi Universitas Islam Darul’Ulum Lamongan mengantar pembekalan Praktek Kerja Lapangan (PKL). Kegiatan tersebut dilaksanakan di semriwing Caffe Lamongan pada hari Senin",
            },
        ],
    },
    {
        image: News35,
        date: "Januari 15, 2024",
        title: "Fakultas Ekonomi UNISDA Goes to SETC",
        link: "fakultas-ekonomi-unisda-goes-to-setc",
        content: [
            {
                type: "text",
                value: "Mahasiswa Prodi Manajemen dan Akuntansi Fakultas Ekonomi UNISDA Lamongan kunjungi Sampoerna Entrepreneurship Training Center (SETC) dalam rangka pelatihan kewirausahaan. Sebanyak 127 Mahasiswa program studi manajemen dan akuntansi mengikuti pelatihan dengan antusias",
            },
        ],
    },
    {
        image: News36,
        date: "Januari 15, 2024",
        title: "Audit Mutu Internal (AMI) di UNISDA",
        link: "audit-mutu-internal-ami-di-unisda",
        content: [
            {
                type: "text",
                value: "Unisda menyelenggarakan kegiatan Audit Mutu Internal (AMI) untuk periode 2023 di semua prodi, Fakultas ekonomi. Kegiatan ini menyasar semua Unit Pengelola Program Studi (UPPS) dan Program Studi (PRODI) d lingkungan UNISDA",
            },
        ],
    },
    {
        image: News37,
        date: "Januari 15, 2024",
        title: "Unisda Lamongan Terima Mahasiswa Inbound Secara Luring",
        link: "unisda-lamongan-terima-mahasiswa-inbound-secara-luring",
        content: [
            {
                type: "text",
                value: "Universitas Islam Darul’Ulum (UNISDA) Lamongan menerima mahasiswa inbound dalam Program Pertukaran Mahasiswa Program MBKM dari Mahasiswa Universitas Islam Mojopahit (UNIM) Mojokerto di Ruang Rapat Gedung Rektorat Lantai 1, Pada hari kamis (12/10/23)",
            },
            {
                type: "image",
                value: InboundLuring,
            },
        ],
    },
    {
        image: News38,
        date: "Januari 15, 2024",
        title: "International Seminar Universitas Islam Darul ‘Ulum Lamongan",
        link: "international-seminar-universitas-islam-darul-‘ulum-lamongan",
        content: [
            {
                type: "text",
                value: "International Seminar Unisda 2023 with the theme “Enhancing Green Economy and Collaborative Business in The Digital Era” will be held on:",
            },
            {
                type: "textBox",
                value: [
                    "⏰ Monday, 11 September 2023, at 08.00 – 12.30 WIB",
                    "📍 3rd Floor Hall, Rectorate Building, Unisda Lamongan",
                ],
            },
            {
                type: "textBox",
                value: [
                    "🎙 Speakers:",
                    "– Prof. Dr. Razli Che Razak (Universiti Malaysia Kelantan)",
                    "– Assoc. Prof. Ts. Dr. Zailani Bin Abdullah (Universiti Malaysia Kelantan)",
                    "– Assoc. Prof. Ferry Jie, Ph.D., FCILT, FCES (Edith Cowan University, Australia)",
                    "– Assoc. Prof. Dr. Novi Darmayanti, S.E., MSA, Ak, CA (Unisda Lamongan, Indonesia)",
                    "– Dr. Ir. Choirul Anam, M.P. (Unisda Lamongan, Indonesia)",
                ],
            },
            {
                type: "image",
                value: InternasionalSeminarUnisda,
            },
        ],
    },
    {
        image: News39,
        date: "Januari 11, 2024",
        title: "Dosen Ekonomi Unisda, berikan Wawasan Prospek Ekonomi dan UMKM Lamongan",
        link: "dosen-ekonomi-unisda-berikan-wawasan-prospek-ekonomi-dan-umkm-lamongan",
        content: [
            {
                type: "text",
                value: "Pemerintah Kabupaten Lamongan (Pemkab Lamongan) bersama Televisi Republik Indonesia (TVRI) Jawa Timur menjalin kerjasama strategis dalam rangka memperkuat sektor ekonomi, khususnya pengembangan Usaha Mikro, Kecil, dan Menengah (UMKM). Salah satu kegiatan yang menjadi bagian dari kerjasama ini adalah diskusi dialog ruang publik yang diselenggarakan di Plaza Lamongan dan disiarkan langsung oleh TVRI Jatim.",
            },
            {
                type: "text",
                value: "Pertumbuhan ekonomi Lamongan, yang selama ini banyak ditopang oleh sektor pertanian, perdagangan, dan jasa, kini semakin memperoleh dorongan positif dari perkembangan UMKM yang menunjukkan tren yang sangat baik. Dalam upaya memotivasi dan memberikan pembinaan kepada pelaku UMKM, TVRI Jatim bersama Pemkab Lamongan akan menyajikan program-program yang dapat membangkitkan semangat dan meningkatkan kualitas UMKM, baik dalam konsep usaha, manajemen, maupun pemasaran.",
            },
            {
                type: "text",
                value: "Diskusi dialog publik tersebut melibatkan narasumber yang kompeten di bidangnya, antara lain Drs. Moh Nalikan, seorang dosen di Fakultas Ekonomi Universitas Islam Darul `Ulum (FE Unisda) yang juga Sekretaris Daerah Kabupaten Lamongan, Anang Taufik S.STP., MSI, Kepala Dinas Perindustrian dan Perdagangan (Kadisperindag) Pemkab Lamongan, Etik Sulistyani SSos., MSI, Kepala Dinas Koperasi dan Usaha Mikro (Kadis Kop dan UMKM) Pemkab Lamongan, serta pemilik UMKM sukses, Soe Art Rima Yuni.",
            },
            {
                type: "text",
                value: "Acara ini dilaksanakan di Plaza Lamongan dengan partisipasi penuh dari audiens yang terdiri dari seluruh pengunjung plaza. Selain itu, acara tersebut juga disiarkan secara langsung melalui kanal TVRI dan YouTube, sehingga mencapai pemirsa yang lebih luas.",
            },
            {
                type: "text",
                value: "Dalam upaya mengedukasi masyarakat, khususnya generasi muda dan mahasiswa, acara ini diharapkan dapat memperkuat jiwa entrepreneur dan memberikan bekal pengetahuan aplikatif terkait UMKM. Dr. Moh Nalikan dari FE Unisda bahkan mengajak mahasiswa FE Unisda untuk mengikuti acara ini, menganggapnya sebagai bagian dari pengetahuan praktis terkait UMKM.",
            },
            {
                type: "text",
                value: "Tujuan utama kegiatan ini adalah untuk menguatkan generasi muda, terutama mahasiswa, dalam berwirausaha. Acara ini juga diharapkan dapat menjadi sarana untuk mentransformasi jiwa entrepreneur, sehingga para lulusan tidak hanya mencari pekerjaan, tetapi juga mampu menciptakan pekerjaan melalui pendirian UMKM yang berkualitas.",
            },
            {
                type: "text",
                value: "Selain dialog publik, mahasiswa FE Unisda juga diundang untuk kuliah praktis di Dinas Koperasi dan Usaha Mikro Pemkab Lamongan. Hal ini diharapkan dapat memberikan bekal teori dan pengalaman praktis, mulai dari konsep mata kuliah koperasi dan UMKM hingga kondisi nyata dan permasalahannya.",
            },
            {
                type: "text",
                value: "Kegiatan ini berlangsung dengan lancar dan penuh hikmah, memberikan harapan baru untuk pertumbuhan ekonomi Lamongan yang semakin kokoh melalui peran aktif UMKM. Alhamdulillah, semoga upaya bersama ini dapat memberikan kontribusi positif bagi pembangunan ekonomi Indonesia menuju Indonesia Emas 2045.",
            },
        ],
    },
    {
        image: News40,
        date: "Januari 11, 2024",
        title: "Seminar Nasional Spirit of Entrepreneurship Inspirasi Mahasiswa Menjadi Entrepreneur Muda",
        link: "seminar-nasional-spirit-of-entrepreneurship-inspirasi-mahasiswa-menjadi-entrepreneur-muda",
        content: [
            {
                type: "text",
                value: "Badan Eksekutif Mahasiswa (BEM) Fakultas Ekonomi Universitas Islam Darul ‘Ulum (UNISDA) menggelar Seminar Nasional Spirit of Entrepreneurship yang menghadirkan dua pemateri ulung: Dr. M. Rizal Nur Irawan, S.E., M.M. (Dosen FE Unisda Lamongan) dan Pradita Aditya (Founder PT Duta Merpati Indonesia dan Founder Aola Co-Working Space).",
            },
            {
                type: "text",
                value: "Dalam seminar ini, ditekankan bahwa mahasiswa perlu memahami konsep Internet of Things (IoT), Artificial Intelligence (AI), robotik, dan virtual reality. Hal ini dianggap sebagai fondasi utama agar mahasiswa mampu memaksimalkan perkembangan teknologi dan informasi yang selalu up to date.",
            },
            {
                type: "text",
                value: "Salah satu poin utama yang dibahas adalah bahwa memulai bisnis tidak perlu berpikir panjang. Mahasiswa diajak untuk memiliki ide yang kreatif, perencanaan yang matang, dan melaksanakan rencana tersebut. Proses ini tentu diawali dengan peningkatan pengetahuan melalui pembelajaran dan pengalaman yang diperoleh selama masa kuliah.",
            },
            {
                type: "text",
                value: "Generasi muda, khususnya mahasiswa, dianggap sebagai harapan bangsa pada masa Indonesia emas 2034. Mereka diwajibkan untuk berpikir kreatif dan inovatif, memaksimalkan potensi yang dimiliki. Mahasiswa dapat menjadi seorang entrepreneur dengan menangkap peluang, seperti menjadi reseller atau ahli digital marketing di daerah asalnya untuk membantu perekonomian masyarakat sekitar.",
            },
            {
                type: "text",
                value: "Adapun peluang lain yang dapat diambil oleh mahasiswa termasuk menjadi penyedia berbagai layanan jasa seperti fotografi pernikahan, layanan les privat, antar-jemput, antar-barang/dokumen, baby care, servis komputer, reseller busana, bimbingan manajemen bisnis, bimbingan akuntansi keuangan, dan sebagainya.",
            },
            {
                type: "text",
                value: "Keunggulan mahasiswa dengan usia muda dianggap sebagai potensi yang baik. Melalui berbagai usaha dan pengalaman jatuh bangun dalam menjalankan bisnis, diharapkan bahwa di masa depan mereka akan menjadi seorang entrepreneur yang sukses dengan pengalaman berharga yang telah diakumulasikan sejak usia muda.",
            },
            {
                type: "text",
                value: "Seminar ini menekankan bahwa mahasiswa UNISDA harus aktif dan tidak boleh pasif. Mereka dituntut untuk beradaptasi dengan kemajuan teknologi, bukan hanya sebagai target pasar, melainkan sebagai pelaku industrialisasi melalui teknologi informasi dalam era digital 5.0. Dengan semangat kewirausahaan, diharapkan mahasiswa dapat menjadi motor penggerak ekonomi kreatif di masa depan.",
            },
        ],
    },
    {
        image: News41,
        date: "Januari 11, 2024",
        title: "Sosialisasi Program MBKM",
        link: "sosialisasi-program-mbkm",
        content: [
            {
                type: "text",
                value: "Kampus Merdeka (MBKM) adalah sebuah inovasi yang dibuat oleh Kemendikbudristek dan diluncurkan sebuah kebijakan untuk mentransformasi sistem Pendidikan tinggi di Indonesia untuk menghasilkan lulusan yang lebih relevan. Program ini diharapkan dapat menjadi salah satu cara untuk menghasilkan lulusan Perguruan Tinggi yang sesuai dengan perkembangan zaman, kemajuan IPTEK, tuntutan dunia kerja, maupun dinamika masyarakat.",
            },
            {
                type: "text",
                value: "Tujuan adanya program Kampus Merdeka (MBKM) adalah menyiapkan lulusan Perguruan Tinggi yang memiliki soft skills maupun hard skills yang matang dan relevan dengan kebutuhan zaman. Dengan begitu, angka sarjana yang menganggur di Indonesia dapat berkurang. Kampus Merdeka (MBKM) juga bertujuan untuk menyiapkan lulusan sebagai pemimpin masa depan bangsa yang unggul dan berkepribadian.",
            },
            {
                type: "text",
                value: "Untuk mahasiswa, manfaat Kampus Merdeka (MBKM) adalah memperoleh kesempatan yang lebih luas untuk mengeksplorasi minat dan bakat selama menjalani pendidikan di Program Studi Sarjana Terapan. Sementara untuk lulusan Perguruan Tinggi manfaat yang didapatkan dari mengikuti program Kampus Merdeka (MBKM) adalah memperoleh keterampilan kerja khusus dan soft skills yang relevan untuk memasuki masyarakat informasi dan Industri 4.0.",
            },
        ],
    },
    {
        image: News42,
        date: "Januari 11, 2024",
        title: "Webinar “Beyond the Balance Sheet”: Membuka Wawasan Baru",
        link: "webinar-beyond-the-balance-sheet-membuka-wawasan-baru",
        content: [
            {
                type: "text",
                value: "Dalam menghadapi era bisnis yang terus berkembang dan kompleks, manajemen keuangan modern dituntut untuk melampaui ketergantungan pada analisis tradisional neraca. Webinar bertajuk “Beyond the Balance Sheet: Exploring Business Evaluation in Contemporary Financial Management” tidak hanya menjadi platform untuk memahami strategi baru dalam manajemen keuangan tetapi juga sebuah kolaborasi antara Universitas Islam Darul ‘Ulum (UNISDA) dan Universiti Malaysia Kelantan (UMK) untuk menghadirkan perspektif internasional.",
            },
            {
                type: "text",
                value: "Kegiatan ini, yang dilaksanakan secara daring pada tanggal 21 Desember 2023, tidak hanya melibatkan ahli-ahli keuangan dari UNISDA, tetapi juga menghadirkan Dr. Siti Salwani Binti Abdullah dari UMK sebagai salah satu pemateri utama. Dr. Siti Salwani membawa wawasan yang berharga dari perspektif Malaysia, memberikan pemahaman mendalam tentang dinamika keuangan dalam skala internasional.",
            },
            {
                type: "text",
                value: "Dalam webinar ini, Ibu Dekan Fakultas Ekonomi, Ibu Novi Darmayanti, dan Bapak Dosen M. Rizal Nur Irawan dari UNISDA turut menyampaikan materi. Mereka menggali strategi manajemen keuangan modern, menyoroti pentingnya evaluasi bisnis yang melibatkan lebih dari sekadar analisis neraca konvensional.",
            },
            {
                type: "text",
                value: "Peserta webinar tidak hanya diajak untuk menjelajahi metode valuasi alternatif dan penilaian risiko yang efektif, tetapi juga diberikan wawasan tentang bagaimana faktor-faktor non-keuangan dapat mempengaruhi pengambilan keputusan di dunia bisnis yang dinamis.",
            },
            {
                type: "text",
                value: "“Dengan demikian, “Beyond the Balance Sheet: Exploring Business Evaluation in Contemporary Financial Management” tidak hanya menjadi forum untuk mendiskusikan strategi keuangan terkini, tetapi juga sebagai upaya kolaboratif antara UNISDA dan UMK Malaysia. Kerjasama ini membawa perspektif global dalam memahami dan mengatasi tantangan manajemen keuangan modern. Webinar ini, yang dilaksanakan secara daring pada tanggal 21 Desember 2023, menjadi langkah nyata dalam memperluas wawasan keuangan di tingkat internasional, menciptakan ruang untuk dialog dan pertukaran ide di antara para profesional keuangan dari berbagai latar belakang.”",
            },
        ],
    },
    {
        image: News43,
        date: "Januari 10, 2024",
        title: "INTERNATIONAL WEBINAR 2023 : BEYOND THE BALANCE SHEET: EXPLORING BUSINESS EVALUATION IN CONTEMPORARY FINANCIAL MANAGEMENT",
        link: "internasional-webinar-2023-beyond-the-balance-sheet-exploring-business-evaluation-in-contemporary-financial-management",
        content: [
            {
                type: "text",
                value: "Date : 21 December 2023",
            },
            {
                type: "text",
                value: "Time : 02.30 pm Kuala Lumpur",
            },
            {
                type: "text",
                value: "Platform : Zoom",
            },
            {
                type: "text",
                value: "Keynote Speaker :",
            },
            {
                type: "text",
                value: "1. Dr. M Rizal Nur Irawan, SE., M.M (Universitas Islam Darul ‘Ulum Indonesia",
            },
            {
                type: "text",
                value: "2. Dr. Siti Salwani binti Abdullah ( Universiti Malaysia Kelantan)",
            },
            {
                type: "text",
                value: "3. Dr. Novi Darmayanti, SE, MSA AK, CA (Universitas Islam Darul ‘Ulum Indonesia)",
            },
            {
                type: "textBox",
                value: [
                    "Moderator :",
                    "1. Arneta Mei Vella (Mahasiswa FE, Universitas Islam Darul ‘Ulum Indonesia)",
                ],
            },
            {
                type: "textBox",
                value: [
                    "Welcoming Speech :",
                    "1. MOH. Azus Shony Azar, SE., MM (Universitas Islam Darul ‘Ulum Indonesia)",
                ],
            },
            {
                type: "image",
                value: InternasionalWebinar,
            },
        ],
    },
    {
        image: News44,
        date: "Januari 10, 2024",
        title: "Inkubasi Bisnis Megpreneur Tahun 2023",
        link: "inkubasi-bisnis-megpreneur-tahun-2023",
        content: [
            {
                type: "image",
                value: InkubasiBisnis,
            },
            {
                type: "text",
                value: "Nama  saya  DWIN  FERYANI  yang  akrab  dengan  sapaan  DWIN,  saya  mahasiswi Universitas Islam Darul ‘Ulum Lamongan (UNISDA) dari fakultas ekonomi program studi akuntansi yang sekarang menempuh kuliah dibangku semester 5. Pada tahun 2023 saya  telah  mendapatkan  penghargaan  berupa  dana  hibah  dari  2  program kemendikbudristek yaitu Program kreativitas mahasiswa (PKM) dan Program Pembinaan mahasiswa wirausaha (P2MW) dan 1 program dari pemerintah kabupaten lamongan yang bekerjasama  dengan  dinas  koperasi  dan  UMKM  dalam  program  MEGPRENEUR (Megilan Entrepreneur) yang masuk dalam 25 tim terbaik inkubasi bisnis wirausahawan muda kabupaten lamongan. Dari pendanaan tersebut kami dapat mewujudkan ide kami menjadi  kenyataan,  kami  dapat  melakukan  riset  secara  mendalam,  mengembangkan prototipe produk kami dan mengimplementasikan program dengan dukungan yang lebih besar. Bagi saya dengan adanya pendanaan tersebut bukan hanya memberikan kami peluang untuk mengembangkan ide inovatif kami, tetapi juga memberikan pembelajaran berharga tentang kolaborasi tim, pengelolaan waktu dan sumber daya, manajemen bisnis dll. Hal ini tentu memberikan dorongan positif bagi kami sebagai mahasiswa yang ingin terus  berkontribusi  untuk  memajukan  UMKM,  membuka  peluang  usaha  dan  tentu menciptakan solusi yang berdampak pada lingkungan dan masyarakat.  Mendapatkan pendanaan dari program-program tersebut menjadi langkah krusial dalam mewujudkan ide bisnis yang berdaya saing dan memiliki value yang memadai, beberapa tips yang saya lakukan untuk mendapatkan dukungan finansial dari program tersebut yaitu memahami dengan cermat persyaratan dan kriteria perlombaan program pembinaan dan memastikan bahwa proposal dan rencana bisnis sesuai dengan kebutuhan yang telah ditentukan, menyiapkan proposal bisnis dengan detail dan relevan sesuai dengan visi misi bisnis dan nilai tambah dari ide bisnis yang kami ajukan, mengetahui secara jelas dan tajam apa yang membuat  bisnis  yang  sudah  kita  buat  dapat  bersaing  dengan  kompetitor  dalam  hal keunggulan produk dan inovasinya serta solusi untuk masalah tertentu atau pendekatan pemasaran yang kreatif, serta  memanfaatkan seluruh sumber daya yang disediakan oleh program pembinaan termasuk mentor/dosen pembimbing, workshop dan juga pelatihan yang disediakan untuk kapabilitas pengembangan bisnis. Menerapkan kiat-kiat tersebut dan melibatkan diri secara aktif, saya dapat meningkatkan peluang untuk mendapatkan pendanaan dan membangun startup yang sukses.  Berkuliah di UNISDA merupakan langkah cerdas untuk meraih Pendidikan tinggi yang tidak hanya memberikan ilmu pengetahuan , tetapi juga membuka peluang besar dalam pengembangan  ketrampilan  wirausaha.  Melalui  program-program  pembinaan  yang terintegrasi khususnya dijurusan Akuntansi, mahasiswa tidak hanya diajarkan konsep- konsep akuntansi yang mendalam, tetapi juga diberikan peluang untuk mengembangkan ide-ide  kreatif  mereka  menjadi  wirausaha  yang  tangguh.  UNISDA  tidak  hanya menghasilkan para profesional akuntansi yang berkualitas, tetapi juga pengusaha yang peduli  pada  dampak  sosial  dan  lingkungan.  Mahasiswa  Akuntansi  didorong  untuk mengintegrasikan prinsip-prinsip keberlanjutan dalam wirausaha mereka, menciptakan dampak positif pada masyarakat sekitar dan lingkungan. Selain pembinaan wirausaha, mahasiswa Akuntansi di UNISDA juga dapat mengakses jaringan luas dari dosen-dosen berpengalaman dan profesional industri yang dapat memberikan pandangan berharga untuk mengembangkan bisnis mereka. Dengan demikian, UNISDA jurusan Akuntansi tidak hanya menjadi tempat untuk mendapatkan gelar akademis, tetapi juga menjadi landasan yang kuat  bagi  mahasiswa untuk  menjadi pemimpin bisnis  yang beretika, inovatif, dan bertanggung jawab terhadap masyarakat dan lingkunganya.",
            },
        ],
    },
    {
        image: News45,
        date: "Januari 10, 2024",
        title: "Program MSIB Angkatan 6 Tahun 2024",
        link: "program-msib-angkatan-6-tahun-2024",
        content: [
            {
                type: "text",
                value: "Selamat dan Sukses kepada Mahasiswa Unisda Lamongan “LOLOS PROGRAM MSIB ANGKATAN 6 TAHUN 2024",
            },
            {
                type: "text",
                value: "Program Magang dan Studi Independen Bersertifikat (MSIB) Merupakan program persiapan karier yang komperhensif dan memberikan kesempatan bagi Mahasiswa untuk belajar di luar program studi dengan jaminan konversi SKS yang diakui perguruan tinggi.",
            },
            {
                type: "text",
                value: "Manfaat Program MSIB :",
            },
            {
                type: "textBox",
                value: [
                    "1. Kesempatan untuk membangun kemitraan dengan perguruan tinggi dari berbagai daerah di Indonesia",
                    "2. Mengasah keahlian karyawan anda melalui program mentorship dengan Mahasiswa",
                    "3. Kesempatan untuk mengajukan bantuan pembiayaan sesuia dengan ketentuan program",
                    "4. Kesempatan untuk melakukan rekrutmen dini kepada mahasiswa sebelum program berakhir",
                ],
            },
        ],
    },
];
