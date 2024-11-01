// Property di class

/**
 * sama pada cosntructor function, dalam class pun kita bisa menambahkan property
 * karena hasil akhirnya adalah sebuah object, jadi menambahkan property di class bisa juga dilakukan di intance object nya
 */

class Person {
    constructor(name) { // ketika ingin memasukkan property, kita menggunakan kata kunci constructor di ikuti dengan parameter yang ingin dimasukkan
        this.name = name; // ini adalah property pada object
    }
}

const aji = new Person("Mass Adji");
console.info(aji);
console.info(aji.name);