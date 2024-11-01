// Membuat class  error

/** Membuat Class error manual
 * Walaupun JavaScript sudah memiliki standard class Error
 * Namun alangkah baiknya, kita membedakan tiap jenis error
 * Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error
 * Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error
 */

class ValidasionError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class MathUtil {
    static sum(...numbers){
        if (numbers.length === 0){
            throw new ValidasionError("Total parameter harus lebih dari 0", "Number : ");
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
    if(error instanceof ValidasionError){
        console.info(`Terjadi error di field ${error.field} dengan error ${error.message}`);
    } else {
        console.info(`Terjadi error ${error.message}`);
    }
} finally {
    console.log("program selesai")
}

console.log("ini string");