// Error Handling

/**
 * Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti
 * Di JavaScript, kita bisa menangkap jika terjadi error
 * Kita bisa menggunakan try catch statement untuk menangkap error
 * Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
 * Jika tidak terjadi error, block catch tidak akan dieksekusi
 */

class MathUtil {
    static sum(...numbers){
        if (numbers.length === 0){
            throw new Error("Total parameter harus lebih dari 0");
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

try {
    console.log(MathUtil.sum());
    console.log("Adji");
} catch (error) {
    console.log(`terjadi Error ${error.message}`);
} finally {
    console.log("program selesai")
}

console.log("ini string");

/** Kata Kunci Finally
 * Kadang kita ingin melakukan sesuatu yang entah itu terjadi error ataupun tidak
 * dalam try catch, kita bisa menambahkan block finally
 * Blovk finally ini akan selalu di eksekusi setelah try catch selesai, entah terjadi error ataupun tidak. Block finally akan selalu di eksekusi
 */

/** Try Finally
 * kata kunci try finally juga bisa digunakan tanpa perlu menggunakan catch
 * biasanya ini di gunakan dalam kasus tertentu 
 */

class Counter {
    #iniTest = 0;

    next() {
        try {
            return this.#iniTest; 
        } finally {
            this.#iniTest++;
        }
    }
}

const tambah = new Counter();
console.info(tambah.next());
console.info(tambah.next());
console.info(tambah.next());
console.info(tambah.next());
console.info(tambah.next());
console.info(tambah.next());




