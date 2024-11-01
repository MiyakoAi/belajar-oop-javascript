/**
 * Sebenarnya kita udah belajar tipe data object, dengan cara membuat variable dengan tipe data object
 * Namun pembuatan object menggunakan tipe data object, akan membuat object yang selalu unik, sedangkan dalam OOP, 
 * biasanya kita akan membuat class sebagai cetakan, sehingga bisa membuat object dengan karakteristik yang sama berkali, kali, tanpa harus mendeklarasikan object berkali-kali seperti menggunakan tipe data object
 */

// contoh membuat object dengan object
const adji = {
    firstName : "Mugni",
    lastName : "Adji"
};

const susilo = {
    firstName : "Adji",
    lastName : "Susilo"
}

// Membuat Constructor Function
/**
 * Sebelum EcmaScript versi 6, pembuatan class, biasanya menggunakan function. Hal ini dikarenakan sebenarnya JavaScript bukanlah bahasa pemrograman yang fokus ke OOP
 * Untuk membuat class di JavaScript lama, kita bisa membuat function
 * Function ini kita sebut dengan Constructor Function
 */

function Person() { 
    // uuntuk membuat Constractor function, kita harus membuat nama functionnya huruf besar di awal, kalau misalkan 2 kata kita saja contonya PersonMembers
}

// untuk memnuat object dari constractor function kita bisa menggunakan kata kunci new, lalu di ikuti dengan constractor functionnya
// contoh penggunaan
const panggilAdji = new Person;
const panggilSusilo = new Person; // ini sudah kita anggap object dan function Person itu adalah class nya
