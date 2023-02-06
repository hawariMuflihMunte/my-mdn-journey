## Writing

<br/>

### # Thinking like a programmer

Salah satu hal yang sulit untuk dipelajari dalam pemrograman adalah bukan hanya tentang menulis sintaksis kode, akan tetapi, mengaplikasikan kode kita untuk menyelesaikan permasalahan nyata. Oleh karena itu, kamu harus menyelesaikan masalah ini dengan menggunakan logika programmer -- disini kamu dituntut untuk melihat deskripsi permasalahan yang dihadapi dan solusi yang diberikan dari program kita, membuat fitur yang dibutuhkan untuk dapat menyelesaikan masalah, dan bagaimana membuat mereka dapat bekerja dengan baik dan semestinya.

---

### # Example - Guess the number game

Berikut tautan contoh program:
<a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html">Number Guessing Game</a>

Bayangkan jika kita diminta untuk mengerjakan mini game seperti diatas oleh client kita:
> Buatkan game sederhana berupa game tebak angka. Game ini harus memilih secara acak nomor dari 1 - 100. Kemudian pemain dapat menebak angka yang telah dipilih dengan batas 10 kali tebakan saja. Setelah menebak, akan muncul pesan kalau tebakannya salah atau benar, dan jika tebakannya salah, tampilkan pesan secara rinci apakah angka yang ditebak itu tinggi atau rendah dari angka yang harus ditebak. Kemudian angka yang sudah ditebak harus ditampilkan agar pemain dapat melihat tebakan mereka sebelumnya. Game akan langsung berhenti apabila pemain menebak angka dengan benar, atau pemain gagal menebak dalam 10 kali tebak. Jika game berakhir, berikan opsi kepada pemain untuk memainkan ulang game.

Dari pernyataan diatas, kita harus memecahnya ke dalam bentuk pernyataan yang lebih sederhana dan dapat diimplementasikan ke program kita:
1. Cetak angka dari 1 sampai 100.
2. Batas tebak angka 10 kali. Jadi, kegiatan menebak akan direkam dari 1 dan setiap pemain menebak akan bertambah 1.
3. Pemain dapat memasukkan angka tebakannya.
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



---

#### Adding variables to store our data

#### Functions

#### Operators

#### Conditionals

#### Events

#### Finishing the game functionality

#### Loops

#### A small discussion on objects

#### Playing with browser objects