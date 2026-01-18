# diStreaming - React & Laravel Application

diStreaming adalah aplikasi web berbasis React yang terintegrasi dengan REST API Laravel. Aplikasi ini menyediakan fitur autentikasi pengguna, manajemen user, serta eksplorasi data movie sebagai fitur tambahan.

Project ini dikembangkan untuk memenuhi kebutuhan **Assignment React & API Integration**.

---

##Technologies & Libraries

### Backend
- Laravel 12
- Laravel Sanctum (Authentication)
- MySQL
- REST API

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React (Icons)

---

## Authentication Features

- Register user (successful & unsuccessful)
- Login user (successful & unsuccessful)
- Logout user
- Token-based authentication menggunakan Laravel Sanctum
- Protected Routes untuk halaman tertentu

---

## User Management (Main Assignment Feature)

- Menampilkan daftar user dari API
- Melihat detail user
- Pagination pada daftar user
- Endpoint API:
  - `GET /api/users`
  - `GET /api/users/{id}`

Semua endpoint user dilindungi oleh authentication (Bearer Token).

---

## Movie Features (Additional Feature)

Sebagai fitur tambahan di luar requirement utama:
- Menampilkan daftar movie dari backend Laravel
- Detail movie
- Search movie berdasarkan judul
- Integrasi thumbnail movie
- Styling UI menyerupai platform streaming

---

## Pagination

Pagination diimplementasikan menggunakan backend Laravel (`paginate()`) dan diterapkan pada halaman User List untuk memenuhi requirement pagination.

---

## Protected Routes

Halaman berikut hanya dapat diakses oleh user yang sudah login:
- Users List
- User Detail

Implementasi menggunakan komponen `ProtectedRoute`.

---

## Responsive Design

Aplikasi dirancang responsive dan dapat diakses dengan baik pada:
- Desktop
- Tablet
- Mobile

---

## 📂 Project Structure (Frontend)

