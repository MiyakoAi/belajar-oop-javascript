// Property di constractor function

/**
 * Sebenarnya setelah kita membuat object, kita bisa dengan mudah menambahkan property ke dalam object tersebut hanya dengan menggunakan nama variable nya, diikuti tanda titik dan nama property
 * Namun jika seperti itu, alhasil, constructor function yang sudah kita buat tidak terlalu berguna, karena property nya hanya ada di object yang kita tambahkan property
 * Untuk menambahkan property di dalam semua object yang dibuat dari constructor function, kita bisa menggunakan kata kunci this lalu diikuti dengan nama property nya
 */

function Person() {
    this.firstName = ""; // jika ingin kita menambahkan property di dalam constructor function, kita hanya menambahkan this. di ikuti dengan property yang kita ingin tambahkan
    this.lastnName = "";
};

const panggilAdji = new Person; // membuat object dengan kata kunci new
panggilAdji.firstName = "Adji"; // menambahkan value ke dalam property
panggilAdji.lastnName = "Susilo";

const panggilSusilo = new Person;
panggilSusilo.firstName = "Susilo";

console.log(panggilAdji);
console.log(panggilSusilo);