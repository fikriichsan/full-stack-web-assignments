# Tugas 1

## Jawablah Pertanyaan di bawah ini
1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

## Jawaban
1. Node.js adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser. Node.js menjalankan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser. Ini memungkinkan Node.js memiliki performa yang tinggi.

    Perbedaan javascript dengan node js adalah JavaScript merupakan bahasa pemrograman untuk membangun aplikasi web, yang berangkat dari tujuan awal yang dimaksudkan sebagai bahasa dari web browser dan JavaScript adalah bahasa yang pemgrogramannya yang hanya berjalan untuk klien,sedangkan node js adalah JavaScript Runtime yang dapat mengeksekusi kode JavaScript di luar browser.
2.  - Single Thread :
      javascript memiliki konsep single thread yang berarti satu task dalam suatu tumpukan.
     - event queue : menyimpan request/thread sesuai urutan masuk untuk kemudian diproses oleh Event Loop satu per satu.
    - event loop :
    semua request yang masuk akan diproses oleh event loop untuk dieksekusi. event loop akan memeriksa terus menerus, ketika antrian kosong di call stack maka akan menambah antrian baru dari event queue sampai semua perintah selesai di eksekusi.
    - Server side scripting
    menjalankan javascript pada server (back end)


3. Perbedaannya :
   
   a. Built in Module: merupakan module yang sudah tersedia atau default dan siap pakai dari node js.
   
   b. External Module : modul yang memerlukan instalasi sebelum digunakan.

   c. Custom Module : modul yang kita buat sendiri atau modul yang dibuat khusus yang dapat dimasukkan ke dalam aplikasi kita.

4. Contohnya  :
   
   a. Built-in Module : http
   
   b. External Module : csv

   c. Custom Module : modul operasi aritmatika
