// Private Method

/**
 * Sama seperti field, terdapat proposal juga untuk menambah fitur private method di EcmaScript
 * Dengan demikian, access modifier private juga bisa digunakan di method
 * Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private
 * ngat fitur ini masih dalam tahapan, belum benar-benar menjadi standard EcmaScript, jadi mungkin tidak semua browser mendukung fitur ini
 * https://github.com/tc39/proposal-private-methods 
 */

class Person {
    sayName(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.info("Hello!");
    }

    #sayWithName() {
        console.info(`Hai ${this.name}`);
    }
}

const panggilNama = new Person();

panggilNama.sayName("Adji"); // ini bisa
panggilNama.#saywithName("Adji"); // ini tidak bisa