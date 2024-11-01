// Super Constructor Js

/**
 * Class Inheritance sifatnya seperti Prototype Inheritance
 * Bagaimana dengan Constructor Inheritance? Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini
 * Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam constructor
 * Kata kunci super digunakan untuk memanggil constructor super class
 * Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor
 */

class Employee {
    constructor (firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.info(`Hello ${name}, My name is Employee ${this.firstName}`);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName); // kata kunci untuk memaanggil constructor lain yatiu super(value)
        this.lastName  = lastName; // jadi kita bisa fokus untuk membuat property lain selain firstName
    }
    
    sayHello(name) {
        console.info(`Hello ${name}, My name is Manager ${this.firstName} ${this.lastName}`);
    }
   
}

const panggilAdji = new Employee("Adji");
panggilAdji.sayHello("Rara");
console.info(panggilAdji);
const panggilMugni = new Manager("Mugni", "Adji");
panggilMugni.sayHello("Ruri");
console.info(panggilMugni);
