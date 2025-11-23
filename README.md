# NUSANTAP API — Backend Resmi  
**Platform Donasi Makanan & Dana Berbasis Node.js + MySQL**

![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Express](https://img.shields.io/badge/Express-4.19-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)
![JWT](https://img.shields.io/badge/Auth-JWT-red)
![License](https://img.shields.io/badge/License-MIT-yellow)

Backend lengkap untuk aplikasi **Nusantap** — platform donasi makanan berlebih dan dana tunai, dengan fitur autentikasi, role-based access (admin/staff/donor), dan manajemen donasi makanan + dana.

## Fitur Utama
- JWT Authentication + Role (admin, staff, donor)
- Full CRUD untuk Blog, Pages, Events, Testimonials, Stats
- Sistem Donasi Makanan (dengan item detail) & Dana (transaksi)
- Contact Form + Dashboard Pesan
- Upload gambar (cover, banner, profil) — siap integrasi Cloudinary/Multer
- CORS, Helmet, Rate Limiting siap produksi
- Dokumentasi OpenAPI (Swagger) lengkap

## Tech Stack
- Node.js 20+
- Express.js
- Sequelize ORM
- MySQL 8.0
- JWT + bcrypt
- dotenv, cors, helmet

## Struktur Folder

nusantap-api/  
├── config/           → Koneksi DB  
├── controllers/      → Business logic  
├── middlewares/      → Auth & error handler  
├── models/           → Sequelize models  
├── routes/           → Semua endpoint  
├── .env.example  
├── app.js  
├── package.json  
└── openapi.yaml      → Dokumentasi Swagger  

## Cara Menjalankan Lokal

### 1. Clone repo
```bash
git clone https://github.com/username/nusantap-api.git
cd nusantap-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup .env
Edit `.env`:
```env
DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
JWT_SECRET=
PORT=
```

### 4. Import database
```bash
mysql -u root -p < db_nusantap.sql
```

### 5. Isi data dummy (opsional)
```sql
-- Buka phpMyAdmin → SQL → paste isi file dummy-data.sql
```

### 6. Jalankan server
```bash
node app.js
```

Server berjalan di: http://localhost:3000

## Endpoint Utama
| Method | Endpoint                | Deskripsi                     | Akses        |
|--------|-------------------------|-------------------------------|--------------|
| POST   | `/api/auth/register`    | Daftar user                   | Public       |
| POST   | `/api/auth/login`       | Login → JWT                   | Public       |
| GET    | `/api/blogs`            | List artikel                  | Public       |
| POST   | `/api/donations`        | Buat donasi makanan/dana      | Auth         |
| GET    | `/api/pages/:slug`      | Halaman statis                | Public       |
| GET    | `/api/stats`            | Statistik dashboard           | Public       |
| POST   | `/api/contacts`         | Kirim pesan kontak            | Public       |
| GET    | `/api/donations`        | Admin: lihat semua donasi     | Admin only   |

## Dokumentasi API
Buka Swagger UI:  
→ https://editor.swagger.io → Import `openapi.yaml`

## Lisensi
MIT © 2025 NUSANTAP Team

---
**Nusantap — Dari Kebaikanmu, Untuk Mereka yang Membutuhkan**
