// Class inheritance

/**
 * Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya
 * Untungnya itu diperbaiki di ES6 dengan fitur class nya
 * Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
 * Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class
 */

class Employee {
    sayHello(name) { // ini adalah method di dalam class
        console.info(`Hello ${name}, My name is Employee ${this.name}`);
    }
}

class Manager extends Employee { // ketika kita ingin mengambil function di dalam classs Employee kita hanya menggunakan extends lalu di ikuti nama classnya
    sayHello(name) {
        console.info(`Hello ${name}, My name is Manager ${this.name}`); // ini bisa di coment dan hasilnya tetap sama
    }
}

const panggilAdji = new Employee();
panggilAdji.name ="Adji";
panggilAdji.sayHello("Rara");
console.info(panggilAdji);
console.log();

const panggilMugni = new Manager();
panggilMugni.name ="Mugni";
panggilMugni.sayHello("Rara");
console.info(panggilMugni);


