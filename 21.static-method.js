// Static Method

/**
 * Kata kunci static tidak hanya bisa d tambahkan di field, tapi juga di method
 * jika kita menambahkan kata kunci di method, artinya method tersebut menjadi milik class nya, bukan prototype
 * dan untuk mengakses method tersebut, kita juga bisa melakukan seperti mengakses static class field
 */

class MathUtil {
    static sum(...numbers){
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const sum = MathUtil.sum(1,2,3,4,5,6,7,8,9);
console.info(sum)