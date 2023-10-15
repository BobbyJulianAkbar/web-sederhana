# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Web Sederhana

Program ini dibuat untuk memenuhi tugas individu 3 Pemrograman Web Lanjut.

## Komponen

Program ini memiliki 4 Komponen yaitu:
- Navigation Bar
- Header
- Main Content
- Footer

## Halaman/Navigasi

Program ini memiliki fitur navigasi menggunakan library `react-router-dom` dan terdapat 4 halaman:
- Home
- About
- Contact
- Result

## Fitur Pesan

Halaman **Contact** Memiliki fitur untuk menerima input teks dari user. Teks tersebut akan disimpan dengan program yang terdapat di `MessageContext.js`.

Kemudian, pesan tersebut akan ditampilkan pada halaman **Result** dan ditampilkan dalam bentuk *Message Counter* pada halaman **Home**.

## Pengujian/Testing

Pengujian atau testing program dilakukan dengan terlebih dahulu menginstall React Testing Library menggunakan perintah `npm install --save-dev @testing-library/react`.

Kemudian, dilakukan testing dengan menjalankan `npm test`. Berikut adalah screenshot dari hasilnya.

![Hasil Test](/src/Assets/test_result.png)

# Profil Mahasiswa

- **Nama : Bobby Julian Akbar**
- **NIM : 120140082**