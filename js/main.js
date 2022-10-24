// 1. Creare un ciclo for che generi i numeri da 1 a 100
for (let i = 1; i<=100;i++){
    // 2. Trovare tutti i numeri multipli di 3,5 e 15 e sostiturli con fizz, buzz e fizzbuzz
    if (i % 15 === 0){
        console.log("fizzbuzz");
    }else if(i % 3 === 0){
        console.log("fizz");
    }else if(i % 5 === 0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}

// 3. Creare un elemento in html per ogni numero e inserirci il numero o la stringa corrispondente
