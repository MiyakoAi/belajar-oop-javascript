// Method Di Constractor Function

/**
 * Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam constructor function
 * Jika kita tambahkan method di constructor function, secara otomatis object yang dibuat akan memiliki method tersebut
 */

function Person() {
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function (name) { // saya seperti kita membuat function di dalam object cuma ini menambahkan this. di awal
        console.info(`hello ${name}, my name is ${this.firstName} ${this.lastName}`);
    }
}

const panggilAdji = new Person(); // kita buat objectnya
panggilAdji.firstName = "Adji"; // lalu kita masukan valuenya
panggilAdji.lastnName = "Susilo";
panggilAdji.sayHello("Runi"); // kita menambahkan value pada method 

console.log(panggilAdji); // hello Runi, my name is Adji Susilo

