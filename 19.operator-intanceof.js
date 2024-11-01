// Operator IntanceOf

/**
 * Kadang ada kasus kita ingin mengecek apakah di dalam sebuah object merupakan intance dari class tertentu atau bukan
 * kita tidak bisa menggunakan operator Typeof, karena dari object class, jika kita ingin menggunakan operator typeof, hasilnya adalah object
 * Operator intanceof akan menaghasilkan boolean, true jika benar object tersebut adalah intance objectnya, atau false jika bukan 
 */

{
    class Employee {

    }


    class Manager {

    }

    const panggilBudi = new Employee();
    const panggilAdji = new Manager();

    console.info(panggilBudi instanceof Employee, panggilBudi instanceof Manager); 
    console.info(panggilAdji instanceof Employee, panggilAdji instanceof Manager);  
}
console.log("-------");


/** Operaot intanceof di class inheritance
 * Operator intanceof mendukung class inheritance, artinya intance of juga bisa digunakan untuk mengecek, apakah sebuah object adalah intance dari class, atau turunan dari class tertentu
 */

{
    class Employee {

    }
    
    class Manager extends Employee {
    
    }
    
    const panggilBudi = new Employee();
    const panggilAdji = new Manager();
    
    console.info(panggilBudi instanceof Employee, panggilBudi instanceof Manager); // true false
    console.info(panggilAdji instanceof Employee, panggilAdji instanceof Manager); // true true?
}