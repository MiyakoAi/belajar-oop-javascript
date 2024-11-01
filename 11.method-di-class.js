// method di class

/**
 * Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function
 * Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object
 * Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
 * Untung nya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype
 */

class Person {
    constructor(name) { // ini adalah constuctor
        this.name = name;
        
    }

    sayHello = function (name) { // ini adalah function di dalam class
            console.info(`Hello ${name}, My name is ${this.name}`);
    }
}

const panggilAdji = new Person("Aji");
console.info(panggilAdji);
