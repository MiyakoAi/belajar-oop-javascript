// Prototype

/**
 * JavaScript sebelumnya dikenal dengan pemrograman berbasis prototype
 * Memang agak sedikit membingungkan, dan tidak dipungkiri, banyak sekali yang bingung dengan konsep prototype di JavaScript
 * Pada chapter ini, kita akan bahas tentang konsep prototype
 */

// Prototype Inheritance

/**
 * Saat kita membuat object dari constructor function, object tersebut disebut instance, semua property (baik itu value atau method), akan berada di dalam instance object nya
 * Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototype nya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
 * Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya
 * Untuk mengakses prototype milih sebuah instance, kita bisa menggunakan __proto__
 */

{
    function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(`Hi ${name}, My name is ${this.firstName} ${this.lastName}`);
    }
    }

    Person.prototype.sayBye = function () {
        console.info("GoodBye");
    }
    Person.prototype.run = function() {
        console.info(`${this.firstName} is running`);
    }



    const panggilNama = new Person("Mugni", "Adji");
    panggilNama.sayHello("Rara");
    console.info(panggilNama); // jalankan di browser
    const panggilAdji = new Person("Mugni", "Adji");
    panggilNama.sayHello("Ruri");
    console.info(panggilNama); // jalankan di browser

    panggilAdji.run();
    panggilNama.sayBye();

// disini kita pasti menemukan prototype di bawah Constructornya
}

// Bagaimana jikalau kita menambahkan property di dalam prototype
/**
 * Property mirip object, dimana kita bisa menambah property baik itu value ataupun method
 * aat kita menambah sebuah property ke Prototype, secara otomatis, semua object instance yang turunan dari prototype tersebut akan memiliki property tersebut
 */

// Bagaimana cara kerja prototype inheritance?

/**
 * Bagaimana bisa property di prototype diakses dari object instance?
 * Ketika kita mengakses property di object instance, pertama akan di cek apakah di object tersebut terdapat property tersebut atau tidak, jika tidak, maka akan di cek di __proto__ (prototype) nya, jika masih tidak ada, akan di cek lagi di __proto__ (prototype) yang lebih tinggi, begitu seterusnya, sampai berakhir di Object Prototype
 */


