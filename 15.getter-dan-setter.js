// Getter dan Setter

/**
 * Class juag mendukung Getter dan Setter
 * Perlu di ingat, getter dan setter ini akan berada di protptype, bukan di intance object
 */

class Person {
    constructor(firstName, Lastname){
        this.firstName = firstName;
        this.Lastname = Lastname;
    }

    get fullName() {
        return `${this.firstName} ${this.Lastname}`;
    }

    set fullName(value){
        const result = value.split(" ");
        this.firstName = result[0];
        this.Lastname = result[0];
    }
}

const panggilNama = new Person("Mugni", "Adji");
console.info(panggilNama.fullName);