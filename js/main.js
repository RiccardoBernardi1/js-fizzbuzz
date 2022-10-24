// 1. Creare un ciclo for che generi i numeri da 1 a 100
// 2. Trovare tutti i numeri multipli di 3,5 e 15 e sostiturli con fizz, buzz e fizzbuzz
// 3. Creare un elemento in html per ogni numero e inserirci il numero o la stringa corrispondente
const numberContainer=document.querySelector(".container");
for (let i = 1; i<=100;i++){
    const numberBox= document.createElement('div');
    if (i % 15 === 0){
        numberBox.innerHTML= "fizzbuzz";
        numberContainer.append(numberBox);
        numberBox.classList.add("fizzbuzz");
        console.log("fizzbuzz");
    }else if(i % 3 === 0){
        numberBox.innerHTML= "fizz";
        numberContainer.append(numberBox);
        numberBox.classList.add("fizz");
        console.log("fizz");
    }else if(i % 5 === 0){
        numberBox.innerHTML= "buzz";
        numberContainer.append(numberBox);
        numberBox.classList.add("buzz");
        console.log("buzz");
    }else{
        numberBox.innerHTML= i;
        numberContainer.append(numberBox);
        numberBox.classList.remove("fizzbuzz","buzz","fizz");
        console.log(i);
    } 
}

