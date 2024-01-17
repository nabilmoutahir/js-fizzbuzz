console.log('JS OK')


// ciclo for da 1 a 100
for (let i=1; i <= 100; i++) {
    
    // se il numero è multiplo di 15
    if (i % 15 == 0) {

        // stampo fizzbuzz in console
        console.log("FizzBuzz")

        // se il numero è multiplo di 5
    } else if (i % 5 == 0) {

        // stampo buzz in console
        console.log("Buzz")

        // se il numero è multiplo di 3
    } else if (i % 3 == 0) {

        // stampo fizz in console
        console.log("Fizz")

        // altrimenti i numeri sono normali
    } else {

        // stampo numeri normali
        console.log(i)

    }
    
}