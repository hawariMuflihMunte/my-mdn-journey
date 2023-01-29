## Writing

<br/>

### # A high-level definition
#### _Definisi level-tinggi_

JavaScript adalah sebuah _bahasa scripting atau pemrograman yang dapat mengimplementasikan fitur-fitur kompleks pada halaman web_ -- _tidak hanya memberikan informasi dalam halaman statis_ -- _menampilkan pembaruan konten terbaru, interaksi, animasi 2D/3D, dan lain-lain_

* HTML<br/>
    Bahasa markup yang dapat digunakan untuk strukturisasi dan memberi makna atau penjelasan tentang konten halaman web, seperti contohnya paragraf, heading, dan tabel, atau menanamkan media berupa gambar ataupun video di halaman web.
* CSS<br/>
    Bahasa yang mendefinisikan gaya/desain yang diterapkan pada konten HTML, contohnya mengatur warna background halaman web, menggatur ukuran font dan warna teks, dan lain sebagainya.
* JavaScript<br/>
    Bahasa scripting yang dapat digunakan untuk membuat konten dinamis, kontrol multimedia, menganimasikan gambar, dan lainnya.

---

### # So what can it really do?
#### _Apa yang dapat dia lakukan?_

Inti dari JavaScript terdiri dari fitur bahasa pemrograman pada umumnya yang dapat digunakan untuk:
* Menyimpan nilai/data ke dalam sebuah variabel.
* Mengoperasikan teks ("string" dalam bahasa pemrograman).
* Menjalankan kode sebagai respons dari peristiwa (`event`) yang terjadi pada halaman web.
* Dan masih banyak lagi.

Yang lebih menariknya, JavaScript memberikan fungsionalitas bawaan (_built-in functionality_) pada sisi client (sederhananya, sisi user atau pengguna). **Application Programming Interfaces (APIs)** -- jika diartikan _Antarmuka Pemrograman Aplikasi_ -- sederhananya, **API** adalah antarmuka dalam suatu program yang dapat berinteraksi dengan program lainnya melalui **API**.
<br/>
<br/>
Dengan begitu, kita dapat membuat program dari JavaScript dengan memanfaatkan **API** tanpa perlu tersambung ke server yang menyediakan **API** tersebut.
<br/>
<br/>
**API** pada JavaScript dapat dibagi ke dalam dua kategori.
1. **Browser API**<br/>
    **API** bawaan pada web browser dan dapat berinteraksi dengan perangkat penggunanya. Contoh:<br/>
    * `DOM (Document Object Model) API` yang dapat digunakan untuk memanipulasi HTML dan CSS, membuat, menghapus, atau mengubah konten HTML, memberikan style baru pada halaman secara dinamis, dan lain sebagainya,
    * `Geolocation API` yang memberikan informasi geografi. Salah satu contohnya adalah Google Maps yang mampu melacak dan memetakan lokasi suatu perangkat,
    * `Canvas` dan `WebGL` yang dapat digunakan untuk membuat animasi grafik 2D dan 3D,
    * `Audio and Video API` yang dapat digunakan untuk berinteraksi dengan multimedia, seperti memutar audio dan/atau video di dalam halaman web, atau menampilkan foto yang kamu ambil dan menampilkannya pada perangkat lainnya (misalnya temanu, saudara, atau sebagainya).
2. **Third-party API**
    **API** ini bukanlah bawaan dari web browser, dan kamu bisa menggunakannya dengan cara mengambil kodenya di internet. Contoh:<br/>
    * `Twitter API`,
    * `Google Maps API`,
    * `openStreetMap API`,
    * Dan lain-lain.

---

### # What is JavaScript doing on your page?
#### _Apa yang dilakukan JavaScript pada halaman webmu_

Ketika kamu menjalankan sebuah halaman web pada web browser, kamu menjalankannya (HTML, CSS, JS) di dalam sebuah lingkungan eksekusi (tab browser). Ia bekerja layaknya sebuah pabrik yang menerima baha mentah (disini bisa kita umpamakan dengan kode) dan menampilkan produk hasil olahannya (halaman web).
<br/>
<br/>
Penggunaan umum dari JavaScript adalah memodifikasi konten HTML dan CSS secara dinamis untuk update tampilannya, dengan menggunakan `DOM API`.
<br/>
<br/>
Dapat terjadi error apabila JavaScript dijalankan terlebih dahulu dibanding HTML dan CSS jika kita ingin menerapkan metode diatas. Sebaiknya kode JavaScript dijalankan apabila HTML dan CSS sudah selesai dijalankan terlebih dahulu.

---

### # Browser security
#### _Keamanan browser_

Masing-masing tab browser memiliki ruang lingkup eksekusi yang berbeda (_lingkungan eksekusi / **execution environments**_) -- Dengan begitu, masing-masing kode dijalankan secara terpisah dan code pada suatu tab tidak dapat mempengaruhi kode pada tab browser lainnya -- atau pada website lainnya. Ini merupakan implementasi keamanan -- jika ini tidak diterapkan, maka bisa dipastikan orang lain (hacker dan sejenisnya) dapat menuliskan kode yang berbahaya dan mulai mencuri informasi-informasi dari website lainnya dan hal-hal yang lainnya yang dapat menguntungkan sepihak saja.

---

### # JavaScript running order
#### _Urutan eksekusi JavaScript_

```
const playerBox = document.querySelector('p');

playerBox.addEventListener('click', () => {
    const name = prompt('Enter a new name');
    playerBox.textContent = `Player 1: ${name}`;
});
```

> Kode diatas merupakan kode pada tombol dibawah (Player 1: Guest)

Pada kode diatas, kita mengambil sebuah teks paragraf (line 1), kemudian
menjalankan `event listener` (line 3) sehingga ketika paragraf diklik, fungsi `updateName()` (line 5 - 8) dijalankan. Blok kode `updateName()` menanyakan user sebuah nama baru, kemudian memasukkannya ke dalam paragraf untuk memperbarui nama di dalamnya sesuai yang kita masukkan.
<br/>
<br/>
Jika kamu menukar urutan dari dua baris pertama kode diatas, kode tersebut akan tidak dapat bekerja lagi sebagaimana mestinya -- yang kamu dapat adalah error yang ditampilkan pada _browser developer console_ -- `TypeError: playerBox is undefined`.

--

### # Interpreted versus compiled code
#### _Kode yang diterjemahkan dengan kode yang dikompilasi_

_Interpret_ (Diterjemahkan) dan _Compiled_ (Dikompilasi). _**Di bahasa pemrograman yang diterjemahkan, code dijalankan dari atas ke bawah dan hasil eksekusi langsung di kembalikan**_. Kode tidak perlu diubah menjadi kode lainnya dan kode ini pun akan berjalan langsung pada lingkungan eksekusinya (disini, kasusnya adalah web browser).
<br/>
<br/>
Sedangkan kode yang dikompilasi, _**kode ini perlu diubah ke dalam bentuk lainnya sebelum dapat dijalankan oleh komputer**_. Seperti contohnya dalam bahasa program C/C++, dimana kode ini dikompilasikan dan diubah ke dalam bentuk kode mesin (format biner) kemudian mesin dapat menjalankan kode ini.
<br/>
<br/>
JavaScript dikompilasikan dengan cepat ke dalam bentuk kode mesin sehingga kode ini dapat berjalan tanpa perlu proses kompilasi dikarenakan ia sudah otomatis dikompilasikan (diterjemahkan) oleh lingkungan eksekusinya (environment).