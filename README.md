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
<img width="1675" alt="Screenshot 2024-10-15 at 13 00 00" src="https://github.com/user-attachments/assets/04a17434-e153-4432-ad6f-c33848fe43d6">
ini adalah contoh halaman tambah berita.

<img width="1667" alt="Screenshot 2024-10-15 at 13 02 24" src="https://github.com/user-attachments/assets/817c6b1e-58d5-4b4e-a5c8-8f010fe49d58">
ini adalah tipe tipe content dalam pembuatan berita.

1. **Teks**

   Untuk menambahkan teks biasa, gunakan tipe `text`:

   ```javascript
   { type: "text", value: "Ini adalah teks berita." }
   ```
   admin:
   
   <img width="1216" alt="Screenshot 2024-10-15 at 13 03 59" src="https://github.com/user-attachments/assets/7325edba-efca-46a5-b794-a8cf737999b8">
   
   user:
   
   <img width="763" alt="Screenshot 2024-10-15 at 13 13 08" src="https://github.com/user-attachments/assets/6db5f23c-7542-4927-ab1f-9b5da368be05">
   
2. **Judul Teks**

   Untuk menambahkan judul, gunakan tipe `textTitle`:

   ```javascript
   { type: "textTitle", value: "Judul Berita" }
   ```
   admin:
   
   <img width="1217" alt="Screenshot 2024-10-15 at 13 19 42" src="https://github.com/user-attachments/assets/7e08fe73-9dfe-42f6-bcdd-439e3229f034">
   
   user:
   
   <img width="826" alt="Screenshot 2024-10-15 at 13 13 08 copy" src="https://github.com/user-attachments/assets/c4a8a02d-081c-42d0-bb79-5bda9dda1d2a">

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
   admin:
   
   <img width="1203" alt="Screenshot 2024-10-15 at 13 04 04" src="https://github.com/user-attachments/assets/b9cf128d-9ea6-44a8-b949-93ec0f8b310d">
   
   user:
   
   <img width="847" alt="Screenshot 2024-10-15 at 13 13 08 copy 2" src="https://github.com/user-attachments/assets/c9da8589-88aa-401b-8041-92d4059177c4">

4. **Gambar**

   Untuk menambahkan gambar, gunakan tipe `image`:

   ```javascript
   { type: "image", value: "nama-file-gambar.jpg" }
   ```
   admin:
   
   <img width="1210" alt="Screenshot 2024-10-15 at 13 04 08" src="https://github.com/user-attachments/assets/5e34f9d5-b1e4-44ae-a017-6921356bf65b">
   
   user:
   
   <img width="1109" alt="Screenshot 2024-10-15 at 13 13 13" src="https://github.com/user-attachments/assets/8fe97d9a-35ce-4942-81d2-6c06d506fbfd">

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
   admin:
   
   <img width="1207" alt="Screenshot 2024-10-15 at 13 04 33" src="https://github.com/user-attachments/assets/478cc224-386c-477a-8c27-f1935de1ebb7">
   
   user:
   
   <img width="1194" alt="Screenshot 2024-10-15 at 13 13 13 copy" src="https://github.com/user-attachments/assets/450ab4f2-af3f-4ce4-a59b-44ffd4ec6c5a">

6. **Daftar (list)**

   Untuk menambahkan daftar, Anda bisa menggunakan tipe `list`. Contoh untuk daftar tidak terurut (`list`):

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
   admin:
   
   <img width="1211" alt="Screenshot 2024-10-15 at 13 09 40" src="https://github.com/user-attachments/assets/75865005-37fd-47c9-953a-248dd27dd83d">
   
   user:
   
   <img width="1036" alt="Screenshot 2024-10-15 at 13 13 19" src="https://github.com/user-attachments/assets/b8e88dd7-83fa-4886-be15-e42ed125bf53">
   
7. **Daftar (listt)**

   Untuk menambahkan daftar, Anda bisa menggunakan tipe `listt`. Contoh untuk daftar tidak terurut (`listt`):

   ```javascript
   { 
       type: "listt", 
       value: [
           { 
               items: [
                   { subtitle: "Subtitle 1", description: "Description 1" },
                   { subtitle: "Subtitle 2", description: "Description 2" },
               ]
           }
       ] 
   }
   ```
   admin:
   
   <img width="1208" alt="Screenshot 2024-10-15 at 13 11 01" src="https://github.com/user-attachments/assets/6ce129ea-bad9-4c9c-9fdf-4d64b4123eb9">
   
   user:
   
   <img width="797" alt="Screenshot 2024-10-15 at 13 38 31" src="https://github.com/user-attachments/assets/25992247-d886-4fdb-a2ba-aec4080a48bc">

8. **Daftar (lisst)**

   Untuk menambahkan daftar, Anda bisa menggunakan tipe `lisst`. Contoh untuk daftar tidak terurut (`lisst`):

   ```javascript
   { 
       type: "lisst", 
       value: [
           { title: "Title 1", items: "Item 1" },
           { title: "Title 2", items: "Item 2" },
       ] 
   }
   ```
   admin:
   
   <img width="1207" alt="Screenshot 2024-10-15 at 13 11 40" src="https://github.com/user-attachments/assets/00b5ffd1-325e-49b7-9483-48384abd597e">
   
   user:
   
   <img width="873" alt="Screenshot 2024-10-15 at 13 38 31 copy" src="https://github.com/user-attachments/assets/72bb47a3-5c9c-4edc-a2f8-2e205bd48b91">

9. **Daftar (lisstt)**

   Untuk menambahkan daftar, Anda bisa menggunakan tipe `lisstt`. Contoh untuk daftar tidak terurut (`lisstt`):

   ```javascript
   { 
       type: "lisstt", 
       value: [
           { items: "Item 1" },
           { items: "Item 2" },
       ] 
   }
   ```
   admin:
   
   <img width="1210" alt="Screenshot 2024-10-15 at 13 12 14" src="https://github.com/user-attachments/assets/88ce6313-5c8a-4182-8ed2-33ca076135d9">
   
   user:
   
   <img width="758" alt="Screenshot 2024-10-15 at 13 38 31 copy 2" src="https://github.com/user-attachments/assets/b78b3ee1-918d-4da4-8f1b-895ea15e94a1">

## Dukungan

Jika Anda mengalami kesulitan atau memiliki pertanyaan, silakan hubungi saya https://www.instagram.com/mirza_rafiq15/.

---

Dengan panduan ini, Anda sekarang dapat menjalankan aplikasi, login ke antarmuka admin, dan menambahkan berita dengan berbagai tipe konten sesuai kebutuhan.
