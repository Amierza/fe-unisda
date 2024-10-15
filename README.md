# Proyek Fakultas Ekonomi UNISDA Lamongan

## Deskripsi Proyek

Proyek ini adalah aplikasi web untuk Fakultas Ekonomi UNISDA Lamongan yang menyajikan berita dan konten terkait dengan cara yang interaktif dan responsif. Pengguna dapat menambah, mengedit, dan menampilkan berita dengan berbagai jenis konten menggunakan **Filament** sebagai antarmuka admin.

## Fitur Utama

- Menampilkan berita dengan berbagai tipe konten
- Responsif dan mudah digunakan
- Antarmuka admin yang intuitif dengan Filament
- Mudah untuk menambah konten berita baru

## Cara Menjalankan Aplikasi

Berikut adalah langkah-langkah untuk menjalankan aplikasi ini di komputer Anda:

### Prerequisites

1. **PHP**: Pastikan Anda sudah menginstal PHP (versi 8.0 atau lebih baru).
2. **Composer**: Pastikan Anda sudah menginstal Composer. Jika belum, Anda dapat mengunduhnya dari [sini](https://getcomposer.org/download/).
3. **Node.js**: Pastikan Anda sudah menginstal Node.js. Jika belum, Anda dapat mengunduhnya dari [sini](https://nodejs.org/).
4. **NPM**: NPM biasanya sudah termasuk dalam instalasi Node.js.
5. **Database**: Pastikan Anda memiliki server database seperti MySQL atau PostgreSQL.

### Langkah-langkah Instalasi

1. **Clone Repository**

   Buka terminal dan jalankan perintah berikut untuk meng-clone repositori:

   ```bash
   git clone <repository-url>
   ```

2. **Navigasi ke Folder Proyek**

   Setelah meng-clone, masuk ke folder proyek:

   ```bash
   cd <nama-folder-proyek>
   ```

3. **Instalasi Dependensi Backend**

   Jalankan perintah berikut untuk menginstal semua dependensi PHP yang diperlukan:

   ```bash
   composer install
   ```

4. **Konfigurasi File `.env`**

   Salin file `.env.example` menjadi `.env` dan sesuaikan dengan konfigurasi database Anda:

   ```bash
   cp .env.example .env
   ```

   Edit file `.env` untuk mengatur konfigurasi database, seperti nama database, username, dan password.

5. **Generate Key Aplikasi**

   Jalankan perintah berikut untuk menggenerate key aplikasi:

   ```bash
   php artisan key:generate
   ```

6. **Migrasi Database**

   Jalankan perintah berikut untuk migrasi database:

   ```bash
   php artisan migrate
   ```

7. **Instalasi Dependensi Frontend**

   Untuk menginstal semua dependensi frontend, jalankan:

   ```bash
   npm install
   ```

8. **Menjalankan Aplikasi**

   Setelah instalasi selesai, jalankan aplikasi dengan perintah:

   ```bash
   php artisan serve
   ```

   Aplikasi akan berjalan di `http://localhost:8000`. Buka browser dan akses URL tersebut untuk melihat aplikasi.

## Cara Login ke Antarmuka Admin Filament

1. Buka browser dan akses URL berikut:

   ```
   http://localhost:8000/admin
   ```

2. Masukkan **email** dan **password** Anda yang telah terdaftar di database untuk login ke antarmuka admin Filament (email:admin@example.com, pass:admin123).

3. Setelah berhasil login, Anda akan diarahkan ke dashboard admin.

## Cara Menambahkan Berita

Anda dapat menambahkan berita baru melalui antarmuka admin Filament. Berikut adalah langkah-langkahnya:

1. **Masuk ke Dashboard Admin**
   
   Setelah login, Anda akan melihat dashboard admin.

2. **Navigasi ke Menu Berita**

   Pilih menu **Berita** di sidebar. Di sini Anda akan melihat daftar berita yang ada.

3. **Menambah Berita Baru**

   - Klik tombol **Tambah Berita**.
   - Isi semua kolom yang diperlukan, termasuk judul dan konten berita.
   - Anda dapat menambahkan berbagai tipe konten sesuai dengan format berikut:

### Format Konten

Setiap berita terdiri dari array `content` yang berisi objek-objek dengan tipe yang berbeda. Berikut adalah contoh tipe konten yang dapat Anda gunakan:

1. **Teks**

   Untuk menambahkan teks biasa, gunakan tipe `text`:

   ```javascript
   { type: "text", value: "Ini adalah teks berita." }
   ```

2. **Judul Teks**

   Untuk menambahkan judul, gunakan tipe `textTitle`:

   ```javascript
   { type: "textTitle", value: "Judul Berita" }
   ```

3. **Kotak Teks**

   Untuk menambahkan beberapa paragraf dalam satu kotak teks, gunakan tipe `textBox`:

   ```javascript
   { 
       type: "textBox", 
       value: [
           { value: "Paragraf pertama." },
           { value: "Paragraf kedua." }
       ] 
   }
   ```

4. **Gambar**

   Untuk menambahkan gambar, gunakan tipe `image`:

   ```javascript
   { type: "image", value: "nama-file-gambar.jpg" }
   ```

5. **Galeri Gambar**

   Untuk menambahkan beberapa gambar dalam satu baris, gunakan tipe `images`:

   ```javascript
   { 
       type: "images", 
       value: [
           { item: "gambar1.jpg" },
           { item: "gambar2.jpg" }
       ] 
   }
   ```

6. **Daftar**

   Untuk menambahkan daftar, Anda bisa menggunakan tipe `list`, `listt`, atau variasi lainnya. Contoh untuk daftar tidak terurut (`list`):

   ```javascript
   { 
       type: "list", 
       value: [
           { 
               title: "Poin Penting", 
               items: [
                   { items: "Item 1", linkItems: "/link-item1" },
                   { items: "Item 2", linkItems: "/link-item2" }
               ]
           }
       ] 
   }
   ```

### Contoh Konten Berita

Berikut adalah contoh bagaimana seluruh konten berita dapat ditambahkan:

```javascript
const newsItem = {
    content: [
        { type: "textTitle", value: "Judul Berita" },
        { type: "text", value: "Deskripsi singkat berita." },
        { 
            type: "textBox", 
            value: [
                { value: "Paragraf pertama." },
                { value: "Paragraf kedua." }
            ] 
        },
        { type: "image", value: "gambar1.jpg" },
        { 
            type: "images", 
            value: [
                { item: "gambar2.jpg" },
                { item: "gambar3.jpg" }
            ] 
        },
        { 
            type: "list", 
            value: [
                { 
                    title: "Poin Penting", 
                    items: [
                        { items: "Item 1", linkItems: "/item1" },
                        { items: "Item 2", linkItems: "/item2" }
                    ]
                }
            ] 
        }
    ]
};
```

## Dukungan

Jika Anda mengalami kesulitan atau memiliki pertanyaan, silakan hubungi saya https://www.instagram.com/mirza_rafiq15/.

---

Dengan panduan ini, Anda sekarang dapat menjalankan aplikasi, login ke antarmuka admin, dan menambahkan berita dengan berbagai tipe konten sesuai kebutuhan.
