## What went wrong? Troubleshooting JavaScript

#### Apa yang salah? Memperbaiki JavaScript

Pada materi sebelumnya, kita telah membuat sebuah game sederhana "Guess the number" dan mungkin pada kasus tertentu game ini tidak dapat
berjalan dengan semestinya -- ada error, atau hal lainya. Tidak perlu takut, pada materi kali ini, akan dibahas cara untuk menangani error
serta mempelajari tipe-tipe error yang ada pada JavaScript.

### # Types of error

Umumnya, ketika ada kesalahan penulisan pada kodemu, ada dua tipe error utama yang akan terjadi:

* Syntax errors: <br/>
  Terjadi kesalahan ejaan pada kode yang menyebabkan kode error, biasanya apabila error ini terjadi akan muncul pesan error-nya yang menjelaskan error-nya
  itu sendiri.

* Logic errors: <br/>
  Error ini merupakan error yang sulit untuk diketahui karena kode tetap berjalan dengan baik akan tetapi kode tidak memberikan hasil yang sesuai dengan keinginan
  atau berbeda dari yang diharapkan. Error ini biasanya tidak memiliki pesan error yang dimunculkan.

---

### # An erroneous example

#### Contoh error

Untuk mempelajari tentang permasalahan error pada JavaScript, kita dapat mempelajarinya pada proyek game kita sebelumnya --- "Guess the number". Namun perbedaannya kali ini, kita akan mengelola kode program ini yang memiliki error pada kode nya dan kita akan memecahkan masalah-masalah yang ada pada kode tersebut.
<br/>
Berikut contoh kode dibawah ini.

```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">

    <title>Number guessing game</title>

    <style>
      html {
        font-family: sans-serif;
      }
      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }
      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>

    <p>
      We have selected a random number between 1 and 100.
      See if you can guess it in 10 turns or less.
      We'll tell you if your guess was too high or too low.
    </p>

    <div class="form">
      <label for="guessField">Enter a guess: </label>
      <input type="text" id="guessField" class="guessField">
      <input type="submit" value="Submit guess" class="guessSubmit">
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

  </body>

  <script>
    let randomNumber = Math.floor(Math.random()) + 1;

    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('lowOrHi');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');

    let guessCount = 1;
    let resetButton;

    function checkGuess() {

      const userGuess = Number(guessField.value);
      if(guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += userGuess + ' ';

      if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if(guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
      } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
      }

      guessCount++;
      guessField.value = '';
      guessField.focus();
    }
    guessSubmit.addeventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addeventListener('click', resetGame);
    }

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

      lastResult.style.backgroundColor = 'white';

      randomNumber = Math.floor(Math.random()) + 1;
    }
  </script>
</html>
```

1. Coba buka text editor dan browser.
2. Cobalah untuk memainkan game nya --- Pasti kamu akan menjumpai masalah ketika menekan tombol "Submit guess", dimana tombol ini
tidak berfungsi dengan semestinya.

---

### # Fixing syntax errors

#### Memperbaiki error sintaks

Sebelumnya, kita sudah membuka _developer tools JavaScript console_. Dengan menggunakan tools bawaan browser ini, kita dapat debugging
code kita (apabila ada error, maka akan muncul dan akan diberitahu jenis error-nya).

1. <img src="https://drive.google.com/uc?export=view&id=1Furfhe8BFbkEhXn1xcYPr8jYAACNpfV7p" loading="lazy" />
2. Error ini masih tergolong mudah untuk dilacak pada konsol, dan browser memberikanmu informasi error-nya.

* sebuah logo "x" berwarna merah yang menandakan adanya error.
* Sebuah pesan error yang memberitahukan apa yang bermasalah: "TypeError: guessSubmit.addeventListener is not a function".
* Tautan "Learn More" yang mengarah ke halaman MDN yang menjelaskan error secara rinci.
* Nama file yang memiliki error pada kode-nya. Jika kita klik ini, maka kita akan diarahkan ke tab `debugger` dan kode yang error akan langsung ditampilkan dengan highlight.
* Baris kode error, contoh `script.js:43:13`.

3. Kode:

  ```javascript
  guessSubmit.addeventListener("click", checkGuess);
  ```

4. Pesan error `guessSubmit.addeventListener is not a function`, yang berarti fungsi yang kita panggil tidak dikenali oleh interpreter JavaScript.
Biasanya, error ini terjadi karena kita salah dalam mengeja sesuatu pada kode program kita. Jika tidak yakin terjadi kesalahan pengejaan pada kode kita,
biasakan untuk selalu mempelajari fitur-fitur JavaScript di MDN. Dengan mengetik "mdn _nama-fitur_" dengan search engine. Berikut contoh tautan-nya <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener()</a>.

---

#### Syntax errors round two

##### Error sintaks ronde dua

---

#### Syntax errors round three

##### Error sintaks ronde tiga

---

### # A logic error

#### Error logis

---

#### Working through the logic

##### Logika

---

### # Other common errors

#### Error umum lainnya

---

#### SyntaxError: missing ; before statement

---

#### The program always says you've won, regardless of the guess you enter

---

#### SyntaxError: missing ) after argument list

---

#### SyntaxError: missing : after property id

---

#### SyntaxError: missing } after function body

---

#### SyntaxError: expected expression, got 'string' of SyntaxError: unterminated string literal

---

### # Summary

---
