// Parameter di constractor function

/**
 * Karena dalam JavaScript, class adalah berbentuk function, jadi secara default, function tersebut bisa memiliki parameter
 * Constructor function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat ketika kita membuat object, kita bisa mengirim langsung data lewat parameter di constructor function tersebut
 */

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.info(`hello ${name}, my name is ${this.firstName} ${this.lastName}`);
    }
}

const panggilAdji = new Person("Adji", "Susilo"); // kita dapat menambahkan value disini
// panggilAdji.firstName = "Adji";      // ini sudah tidak lagi kita butuhkan karena kita sudah menambahkan parameter constructornya
// panggilAdji.lastnName = "Susilo";    // jadi ini bisa di bilang bisa kita hapus
panggilAdji.sayHello("Runi"); 
console.log(panggilAdji); 

const panggilSusilo = new Person(); // person akan undifined karena tidak memasukkan parameter di dalamnya
panggilSusilo.firstName = "Adji";
panggilSusilo.firstName = "Susilo";
panggilSusilo.sayHello("Rara");
console.info(panggilSusilo); // jika kita run hasilnya akan tetap sama