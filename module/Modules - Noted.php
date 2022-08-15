<?php
//@ PENGENALAN REACT
//? react adalah library javascript/front end framework, digunakan karena berukuran kecil
//? Komponen membuat antarmuka yang dibangun menggunakan React sangat reusable.
//? Pembuatan antarmuka pengguna dapat lebih cepat. Anda bisa menuliskan “layaknya” sintaksis HTML di dalam kode JavaScript

//@ KONSEP DASAR REACT
//? react komponen; sama seperti elemen html, bedanya adalah hanya sebuah object javascript yg berisi elemen html
//? react element; sebuah fungsi yang mengembalikan React element, reusable dapat digunakan kembali.
//? composition; Proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks

//@ REACT UI COMPONENT 
//? react element; sama dgn DOM element, React.creactElement(/* type */, /* property */, /* content */);
//? jsx; javascript expression, prosess react element -> html native
//? <React.Fragment> / <> untuk membungkus reder tanpa div
//? react component; dengan membuat fungsi yang mengembalikan React element mengunakan html native
//? component properties; tag custom html dan pemanggilan fungsi javascript yg dapat memberikan beberapa param props, children
//? composite component; kumpulan beberapa element ui, dipecah menjadi bebrapa element
//? npx create-react-app my-app; to create react-app
//? npm start; to running the app
//? npm run build; mem-build proyek ke dalam berkas HTML, CSS, dan JS secara statis

//@ PENGANTAR STATEFULL COMPONENT
//? props; berasal dari luar komponen dan diharapkan tidak berubah, sedangkan data di dalam
//? state; form-penyimpanan data yang perlu diinisialisasi di dalam komponen itu sendiri dan datanya boleh berubah. (event handler)
//? controlled component; Form yang sumber datanya dikontrol oleh React melalui component state