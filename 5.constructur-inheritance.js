// Constructur inheritence

/**
 * Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function
 * Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersebut
 * Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)
 */

// Kode Constructur Inheritance
function Employee(firstName) { // kita buat constructor seperti biasa
    this.firstName = firstName;
    this.sayHello = function (name) { // menambahkan method
        console.info(`Hi ${name}, My name is ${this.firstName}`);
    }
}

function Manager(firstName, lastName) { // menambahkan firstName dan lastName
    Employee.call(this, firstName); // ini adalah kunci untuk memanggil function Employee di atas. NamaConstructor.call(this, parameter) jika parameter yang ada di Employee ada 2, kita masukkan juga di pemanggilan ini, perlu di ingat pemanggilan property di awali dengan kata kunci this
    this.lastName = lastName;
}

const panggil = new Manager("Adji", "Susilo");
console.info(panggil);