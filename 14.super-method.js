// Super Method

/**
 * Selain digunakan untuk memanggil constructor milih parent class, kata kunci super juga bisa digunakan untuk mengakses method parent class
 * Caranya bisa menggunakan super titik nama function nya
 * Dengan kata lain, super sebenarnya adalah reference ke parent prototype, mirip seperti __proto__
 */

class Shape {
    paint(){
        console.info("paint super");
    }
}

class Circle extends Shape {
    paint(){ // ketika kita ingin mengambil method kita harus mengambil methodnya juga
        super.paint(); // ini adalah kata kunci untuk mengambil method, kita juga menggunakan kata kunci super untuk memanggil methodnya
        console.info("paint circle"); // text acak
    }
}

const panggilPain = new Circle();
panggilPain.paint(); // mengakses paint