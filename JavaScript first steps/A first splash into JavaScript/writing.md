## Writing

<br/>

### # Thinking like a programmer

#### Berpikir kritis seperti programmer

Salah satu hal yang sulit untuk dipelajari dalam pemrograman adalah bukan hanya tentang menulis sintaksis kode, akan tetapi, mengaplikasikan kode kita untuk menyelesaikan permasalahan nyata. Oleh karena itu, kamu harus menyelesaikan masalah ini dengan menggunakan logika programmer -- disini kamu dituntut untuk melihat deskripsi permasalahan yang dihadapi dan solusi yang diberikan dari program kita, membuat fitur yang dibutuhkan untuk dapat menyelesaikan masalah, dan bagaimana membuat mereka dapat bekerja dengan baik dan semestinya.

---

### # Example - Guess the number game

#### Contoh - Permainan tebak angka

Berikut tautan contoh program:
<a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html">Number Guessing Game</a>

Bayangkan jika kita diminta untuk mengerjakan mini game seperti diatas oleh client kita:
> Buatkan game sederhana berupa game tebak angka. Game ini harus memilih secara acak nomor dari 1 - 100. Kemudian pemain dapat menebak angka yang telah dipilih dengan batas 10 kali tebakan saja. Setelah menebak, akan muncul pesan kalau tebakannya salah atau benar, dan jika tebakannya salah, tampilkan pesan secara rinci apakah angka yang ditebak itu tinggi atau rendah dari angka yang harus ditebak. Kemudian angka yang sudah ditebak harus ditampilkan agar pemain dapat melihat tebakan mereka sebelumnya. Game akan langsung berhenti apabila pemain menebak angka dengan benar, atau pemain gagal menebak dalam 10 kali tebak. Jika game berakhir, berikan opsi kepada pemain untuk memainkan ulang game.

Dari pernyataan diatas, kita harus memecahnya ke dalam bentuk pernyataan yang lebih sederhana dan dapat diimplementasikan ke program kita:

1. Cetak angka dari 1 sampai 100.
2. Batas tebak angka 10 kali. Jadi, kegiatan menebak akan direkam dari 1 dan setiap pemain menebak akan bertambah 1.
3. Pemain dapat memasukkan angka tebakannya.
4. Lakukan pengecekan tebakan.
5. Apabila benar, maka
1. Tampilkan pesan kemenangan pemain.
2. Berikan opsi untuk bermain ulang.
6. Apabila salah, maka
1. Tampilkan pesan kesalahan, apakah angka yang dimasukkan tinggi atau rendah dari angka yang ditebak.
2. Masukkan angka lagi
3. Tambah jumlah rekam tebakan sebanyak 1.
7. Apabila salah dan pemain sudah menebak sebanyak 10 kali, maka
1. Tampilkan pesan kekalahan pemain.
2. Pemain tidak dapat memasukkan angka tebakan lagi.
3. Berikan opsi untuk bermain ulang.
8. Jika game di mulai ulang, maka pastikan program untuk me-reset ulang programnya agar dapat dimainkan kembali.

---

#### Initial setup

##### Tahapan awal

Letakkan kode pada tag `<script>` atau jika menulis kode JS secara terpisah, kita dapat memanggil tag `<script>` dengan atribut
`src` dimana isi dari atribut ini adalah nama file kode JS eksternal.

---

#### Adding variables to store our data

#### Menambahkan variabel untuk menyimpan data

Kode di dalam `<script>`

```javascript
let randomNum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton = 0;
```

Penjelasan:

* `randomNum` merupakan kode untuk mencetak angka secara acak dan tersimpan pada variabel ini.
* `guesses`, `lastResult`, `lowOrHi` merupakan kode yang digunakan dengan DOM API untuk memanipulasi konten HTML.

```html
<div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
</div>
```

Ketiga variabel diatas akan memanipulasi konten HTML diatas dengan nama class yang sesuai.

* `guessField` dan `guessSubmit` juga kode untuk memanipulasi konten HTML.

```html
<div class="form">
    <label for="guessField">Enter a guess: </label>
    <input type="number" min="1" max="100" required id="guessField" class="guessField">
    <input type="submit" value="Submit guess" class="guessSubmit">
</div>
```

* Terakhir, variabel `guessCount` dan `resetButton` digunakan untuk merekam dan menghitung jumlah tebakan pemain. Agar game dapat dimainkan ulang dan
dapat dilakukan pengecekan apakah pemain sudah menebak 10 kali atau belum.

---

#### Functions

##### Fungsi

```javascript
function checkGuess() {
    alert('I am placeholder');
}
```

Lakukan pengecekan apakah fungsi diatas dapat berjalan dengan memanggil fungsinya:

```javascript
checkGuess();
```

Bila halaman menampilkan pesan `I am placeholder`, maka fungsi sudah dapat berjalan.

---

#### Operators

##### Operator

###### 🎗 Operator Aritmatika

<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th>Name</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>+</code></td>
            <td>Addition</td>
            <td><code>6 + 9</code></td>
        </tr>
        <tr>
            <td><code>-</code></td>
            <td>Subtraction</td>
            <td><code>32 - 12</code></td>
        </tr>
        <tr>
            <td><code>*</code></td>
            <td>Multiplication</td>
<td><code>3* 5</code></td>
        </tr>
        <tr>
            <td><code>/</code></td>
            <td>Division</td>
            <td><code>10 / 4</code></td>
        </tr>
    </tbody>
</table>

Operator `+` juga dapat digunakan untuk menyambungkan string (disebut _concatenation_).

```javascript
const name = 'Bingo';
console.log(name); // Bingo

const hello = ' says hello!';
console.log(hello); //   says hello!

const greeting = name + hello;
console.log(greeting); // Bingo says hello!
```

Atau dapat juga dilakukan dengan

```javascript
let name = 'Kyle';
name += ' says hello!';
console.log(name);
```

###### 🎗 Operator Perbandingan

<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th>Name</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>===</code></td>
            <td>Strict equality (is it exactly the same?)</td>
            <td><pre>5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
20 === '20' // false
// Number versus string</pre></td>
        </tr>
        <tr>
            <td><code>!==</code></td>
            <td>Non-equality (is it not the same?)</td>
            <td><pre>5 !== 2 + 4 // true
'Chris' === 'Bob' // true
5 === 2 + 3 // false
20 === '20' // true
// Number versus string</pre></td>
        </tr>
        <tr>
            <td><code>&#60;</code></td>
            <td>Less than</td>
            <td><pre>7 &#60; 20 // true
30 &#60; 12 // false</pre></td>
        </tr>
        <tr>
            <td><code>&#62;</code></td>
            <td>Strict equality (is it exactly the same?)</td>
            <td><pre>7 &#62; 20 // false
30 &#62; 12 // true</pre></td>
        </tr>
    </tbody>
</table>

---

#### Conditionals

##### Percabangan

Tentu saja kita tidak ingin fungsi `checkGuess()` kita hanya menampilkan pesan `I am a placeholder` saja kan.
Oleh karena itu, kita kita dapat melanjutkan mengisi blok fungsi kita dengan kode berikut

```javascript
function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent += `${userGuess}`;
    }

    guesses.textContent += `${userGuess}`;

    if (userGuess === randomNum) {
        lastResult.textContent = 'Congratuliatons! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNum) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNum) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}
```

Mari kita beda kode diatas:

* Baris pertama mendeklarasikan sebuah variabel `userGuess` and nilainya di ambil dari tebakan (input) pemain.
* Selanjutnya, ada blok kode kondisional atau percabangan. Dengan adanya percabangan, kita dapat memilih blok kode
mana yang ingin kita jalankan dan tidak kita jalankan dengan menentukan syaratnya.
Contohnya pada blok kondisional pertama, kita dapat melihat kode `guessCount === 1`. Blok ini mengevaluasi apakah nilai variabel
`guessCount` bernilai 1 atau tidak. Jika ya, maka jalankan kode yang ada di dalam blok ini.
* `userGuess` akan ditimpa di `guesses` sehingga pemain dapat melihat tebakan sebelumnya.
* Selanjutnya,
* `if () { }`. Cek apakah tebakan pemain benar atau salah. Jika benar, maka game akan menampilkan pesan kemenangan dengan background
 berwarna hijau, hapus konten HTML lainnya agar pesan kemenangan dapat tampil, kemudian jalankan fungsi `setGameOver()`.
* `else if () { }`. Sama seperti blok kode diatas sebelumnya, blok ini merupakan kebalikannya. Jika pemain sudah menebak sebanyak 10 kali
 dan belum menemukan jawaban yang benar, maka tampilkan pesan kekalahan dan jalankan fungsi `setGameOver()`.
* `else { }`. Blok kode ini yang akan berjalan apabila blok kondisional diatas sebelumnya (`if () { }` dan `else if () { }`) tidak terpenuhi syaratnya.
 Blok kode ini akan melakukan perekaman tebakan pemain, menampilkan pesan apakah tebakan pemain terlalu rendah atau tinggi.
* Yang terakhir, kode `guessCount` ditambah setiap pemain menebak dan `guessField.value = '';` mengosongkan konten HTML sehingga pemain dapat
mengisi angka tebakannya tanpa tertimpa dengan angka tebakan sebelumnya.

---

#### Events

##### Peristiwa

Saat ini, kita sudah mengimplementasikan kode pada blok fungsi `checkGuess()`, namun fungsi ini tidak melakukan apapun dan kita tidak dapat melihat hasil jalannya kode ini dikarenakan kita belum memanggil nya. Idealnya, fungsi `checkGuess()` dijalankan ketika `"Submit guess"` diklik dan untuk melakukan ini kita memerlukan sebuah **event**.

_Events_ adalah sesuatu yang dapat terjadi (berjalan) pada browser -- sebuah tombol di klik, halaman di muat, sebuah video dijalankan, dan lain sebagainya. -- sebagai respons dimana kita dapat menjalankan blok kode tertentu. **Event listeners** mengamati events secara spesifik dan memanggil **event handlers**, dimana kode ini dijalankan sebagai respons dari event yang dipicu.

Berikut kode yang ditambahkan pada kode JS game sebelumnya:

```javascript
guessSubmit.addEventListener('click', checkGuess);
```

Disini, kode ini digunakan untuk menambah _event listener_ ke tombol `guessSubmit`. Method ini menerima dua buah nilai masukan (disebut _argument_) -- Tipe event yang kita dengarkan pada kasus game ini adalah `click` (sebagai string), dan kode yang ingin kita jalankan ketika tombol di `click` adalah fungsi `checkGuess()`.

Selanjutnya, pengkodean fungsi `setGameOver()`.

---

#### Finishing the game functionality

##### Menyelesaikan fungsionalitas permainan

```javascript
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';

    document.body.append(resetButton);

    resetButton.addEventListener('click', resetGame);
}
```

* Dua baris pertama merupakan kode untuk menonaktifkan input form.
* Selanjutnya, kita membuat sebuah elemen HTML baru dengan method `createElement(HTMLElementName)` dan mengatur isi konten teks nya dengan teks `Start new game`.
* Yang terakhir, kita membuat sebuah _event listener_ pada `<button>` baru kita ketika diklik. Ketika tombol ini diklik, maka jalankan fungsi `resetGame()`.

```javascript
function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');

    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lasResult.style.backgroundColor = 'white';

    randomNum = Math.floor(Math.random() * 100) + 1;
}
```

Kode diatas me-reset seluruh program kita dan memulai dari awal

* Mengubah `guessCount` kembali ke 1
* Mengosongkan semua informasi teks pada paragraf. Seluruh paragraf yang ada didalam `<div class="resultParas"></div>`, kemudian melakukan _looping_ dan mengatur `textContent` menjadi `''` (string kosong).
* Menghilangkan tombol reset
* Mengaktifkan kembali input form, mengosongkan teks sehingga game dapat dimainkan kembali
* Menghilangkan warna background dari `lastResult`.
* Cetak angka acak baru sehingga angka yang ditebak oleh pemain bukan hanya angka yang sudah ia tebak sebelumnya.

---

#### Loops

##### Perulangan

Loop merupakan konsep perulangan jalannya kode dengan syarat tertentu. Konsep ini merupakan konsep yang sangant penting dalam pemrograman, dengan adanya konsep ini, programmer dapat menjalankan suatu aksi tanpa harus menuliskan kodenya secara berulang yang dimana hal ini kurang efektif dan menguras tenaga dan pikiran bagi programmer.

Berikut contoh kode yang dapat dicoba:

```javascript
const fruits = ['apples', 'bananas', 'cherries'];
for (const fruit of fruits) {
    console.log(fruit);
}

/* output:
apples
bananas
cherries
*/
```

---

#### A small discussion on objects

##### Obrolan kecil tentang object

```javascript
guessField.focus();
```

Dengan menambahkan method `focus()`, user akan langsung diarahkan kepada `<input>` segera setelah halaman selesai memuat konten. Dengan begitu, hal ini dapat meningkatkan _usability_ atau _cara pemakaian_ yang dapat membuat user paham dengan apa yang harus dilakukan dan bagaimana caranya berinteraksi dengan game yang dimainkannya.

Mari menganalisa apa yang terjadi sebenarnya. Dalam _JavaScript_, sebagian besar item yang dimanipulasi dalam kode mu adalah _object_. _**Object adalah koleksi fungsional yang dirangkap dalam satu kelompok atau grup**_.

Pada kasus game yang dibuat, pertama kita membuat sebuah variabel konstan `guessField` yang menyimpan referensi input teks pada konten HTML -- Dapat dilihat dibawah ini:

```javascript
const guessField = document.querySelector('.guessField');

```

Untuk mendapatkan referensi ini, kita menggunakan method `querySelector()` dari object `document`. `querySelector()` mengambil informasi yang diperlukan -- seperti sebuah __CSS selector_ yang memilih elemen HTML yang ingin di ambil pada konten HTML.

Karena sekarang `guessField` sudah memiliki referensi `<input>` di dalam konten HTML, sekarang kita mempunyai hak akses dalam manipulasi properti konten ini (biasanya variabel yang terkandung di dalam object, adapula variabel yang nilainya tidak dapat diubah) serta method (biasanya fungsi yang terkandung di dalam object). Salah satu method pada elemen `<input>` adalah `focus()`, sekarang kita dapat lihat bagaimana penggunaan method ini pada kode kita.

```javascript
guessField.focus();
```

Variabel yang tidak memiliki referensi ke elemen form biasanya tida memiliki method `focus()`. Seperti contoh, `guesses` mengandung sebuah referensi ke elemen `<p>` dan `guessCount` mengandung nilai berupa angka.

---

#### Playing with browser objects

##### Bermain dengan object browser

Mari bermain-main dengan web browser sebentar.

1. Pertama, buka web browser.

2. Kemudian, buka <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools">browser developer tools</a> dan pastikan konsol JS dibuka.

3. Ketik `guessField` di konsol dan akan tampil elemen `<input>`.
Contoh pada gambar dibawah: <img src="https://drive.google.com/uc?export=view&id=143x0U10g-QBOKcfRur3E3sJqjpDZGVof" loading="lazy" />

4. Sekarang, ketik:

```javascript
guessField.value = 2;
```
Properti `value` merepresentasikan nilai yang ada di dalam `<input>`. Setelah mengetik kode diatas, kita dapat melihat perubahan yang terjadi di dalam input kita.

5. Coba ketik `guesses` pada konsol dan tekan `Enter`. Konsol memberitahu kita kalau variabel `guesses` mengandung elemen `<p>` di dalamnya.

6. coba ketik di konsol

```javascript
guesses.value
```

Konsol akan menampilkan nilai `undefined`, ini terjadi karena paragraf (`<p>`) tidak memiliki properti `value` di dalamnya.

7. Untuk mengganti teks di dalam paragraf (`<p>`), kamu perlu properti `textContent`. Contoh:

```javascript
guesses.textContent = 'Where is my paragraph?';
```

8. Sekarang, untuk bersenag-senang. Coba ketikkan kode di bawah ini pada konsol:

```javascript
guesses.style.backgroundColor = 'yellow';
guesses.style.fontSize = '200%';
guesses.style.padding = '10px';
guesses.style.boxShadow = '3px 3px 6px black';
```

Setiap elemen HTML memiliki properti `style`, yang dimana memiliki sebuah object pada dirinya sendiri yang propertinya mengandung CSS inline. Dengan ini, kita dapat memanipulasi desain CSS pada elemen secara dinamis menggunakan JS.

---

That's all 😄<br/>
Have a nice day 🏝️<br/><br/>
