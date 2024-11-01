// Private Class Field

/**
 * Secara default, saat kita menambahkan field, maka field tersebut bisa diakses dari manapun
 * Jika kita ingin membuat field yang bersifat private (hanya bisa diakses di dalam class), kita bisa menggunakan tanda # sebelum nama field nya
 * Ini dinamakan private class field, dan hanya bisa diakses dari dalam class saja
 */

class Counter {
    #counter = 0

    increment() {
        this.#counter++;
    }
    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();

console.info(counter.get());
console.info(counter);