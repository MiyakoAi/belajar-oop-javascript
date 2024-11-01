// Static Class Field

/** Kata Kunci Static
 * static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasanya kita membuat field atau method, maka secara otomatis field akan menjadi property di intance object dan methid akan menjadi function di prototype.
 * jika kita menambahkan static maka hal itu tidak terjadi.
 */

/** Static Class Field
 * Jika kita tambahkan static dalam class field, secara otomatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri.
 * Biasanya static digunakan jika kita ingin membuat utility field atau function.
 * Cara mengakses static class field pun tidak lagi lewat object, melainkan lewat class nya.
 * Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama.
 */

class Configuration {
    static name = "Belajar javaScript OOP";
    static version = 0.1;
    static authour = "Mugni Adji";
}

console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.authour);