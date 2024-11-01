// Prototype Inheritance
/**
 * Sekarang kita sudah tahu, bahwa prototype selalu memiliki parent, artinya dia adalah turunan, parent tertinggi adalah Object prototype
 * Pertanyaannya bagaimana jika kita ingin melakukan inheritance ke Prototype lain?
 * Hal ini juga bisa dilakukan, namun agak sedikit tricky, karena hal ini, sebenarnya untuk JavaScript modern, tidak direkomendasikan lagi praktek OOP menggunakan Prototype, karena di ES6 (EmaScript versi 6) sudah dikenalkan kata kunci class yang akan nanti dibahas di chapter tersendiri
 */

// Contoh prototype Inheritance  SALAH
{
    function Employee(name) {
        this.name = name;
    }
    function Manager (name) {
        this.name = name;
    }

    Manager.prototype = Employee.prototype; // ini adalah cara yang salah

    Manager.prototype.sayHello = function (name) {
        console.info(`Hello ${name}, my name is Manager ${this.name}`);
    }
    Employee.prototype.sayHello = function (name) {
        console.info(`Hello ${name}, my name is Employee ${this.name}`);
    }

    const employee = new  Employee("Mugni");
    employee.sayHello("Adji");
    const manager = new  Manager("Mugni");
    manager.sayHello("Adji");
    console.info("-- diatas adalah cara yang salah---");
    console.info();
}

// ini adalah cara yang benar Prototype Inheritance
function Employee(name) {
    this.name = name;
}
function Manager (name) {
    this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
}
Employee.prototype.sayHello = function (name) {
    console.info(`Hello ${name}, my name is Employee ${this.name}`);
}

const employee = new  Employee("Mugni");
employee.sayHello("Adji");
const manager = new  Manager("Mugni");
manager.sayHello("Adji");

console.info(employee);
console.info(manager);

