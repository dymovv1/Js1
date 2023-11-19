'use strict'

/* 
1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку. */

// const count = 0.1 + 0.2;
// const math = count.toFixed(1)
// console.log(math);
// // перше - виконано 

// const numbers1plus2 = parseInt("1") + 2; 
// console.log(numbers1plus2);
// // друге - виконано 

// function flashCard() {
//     const flashSize = prompt('Вкажіть обсяг флешки (Кількість ГБ)');
//     const gb = 1000;
//     const file = 820;
//     const revertFlashSize = flashSize * gb;
//     const result = Math.floor(revertFlashSize / file);
//     console.log(revertFlashSize);
//     alert(`На FlashCard розмір ${flashSize} ГБ поміститься ${result} файлів розуміром 820 мб`)
// }

// flashCard();
// третьє завдання виконано

/* 
1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
2.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */

// const wallet = document.querySelector('.input-wallet');
// const price = document.querySelector('.input-price');
// const countButton = document.querySelector('.btn-primary');
// const alertResult = document.querySelector('.alert');
// const buttonClear = document.querySelector('.btn-danger')

// countButton.addEventListener('click', function(){
//     if (wallet.value === '' || price.value === '') {
//         alert('Введіть коректне значення в поле (заповність всі поля,цифри,без пробілів)');
//     } else  {
//         const total = wallet.value / price.value;
//         alertResult.textContent = `На суму ${wallet.value} грн можна купити ${Math.floor(total)} шоколадок/ки`;
//         alertResult.style.display = 'block';
//     }
// })

// buttonClear.addEventListener('click' , function(){
//     alertResult.style.display = 'none';
//     wallet.value = price.value = ''
// })
// // завдання виконано 

// const number = () => {  
// const numberPrompt = prompt('Введіть число?');
// const reversedNumber = numberPrompt.toString().split('').reverse().join('');
// alert(`Ваше число (задом наперед) ${ reversedNumber}`);
// }

// number();
// завдання виконано 

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// Що повернуть вирази:

// 2 && 0 && 3

// 2 || 0 || 3

// 2 && 0 || 3

// const btnTotal = document.querySelector('.btn-success');
// const inputTotal = document.querySelector('.input-total');
// const alertResultBank = document.querySelector('.alert-primary');


// btnTotal.addEventListener('click', () => {
//     const depositAmount = parseFloat(inputTotal.value);
//     const monthlyInterestRate = 0.05 / 12;
//     const numberOfMonths = 2;
//     const bankResult = depositAmount * (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1); 
//     alertResultBank.style.display = 'block';
//     alertResultBank.textContent = `Cума нарахованих відсотків за 2 місяці під 5% річних, буде становити в грошовому еквівалент ${Math.floor(bankResult)} грн.`
// })

// написання завдання йолки з зірочок 

// const createCounter = function(number) {
//     let countNumber = number;
//     return function counter() {
//         return countNumber++;
//     }
// };

// const counter = createCounter(10)

// console.log(counter());
// console.log(counter());
// console.log(counter());




//     const expect = function(val) {

//         return {
//             toBe: function (toBe) {
//                 if (val === toBe) { 
//                     return true
//                 } else  {
//                     throw new Error("Not Equal");
//                 };
//             },
    
//             notToBe: function (notToBe) {
//                 if (val !== notToBe) {
//                     return true;
//                 } else {
//                     throw new Error("Equal");
//                 }
//             }    
//         }
    
//     };
    

//  console.log(expect(5).toBe(null));
//  console.log(expect(5).notToBe(5));





// const arryWithUsers = [
//     { Roman : 'Developer' , salary : 2500 },
//     { Artem : 'QA' , salary : 1500 },
//     { Georgiy : 'Developer' , salary : 2100 },
//     { Alona : 'HR' , salary : 1000 }
// ];

// // let stars = ['*' , '**' , '***' , '****' , '*****' , '******' , '********' , '*********', '**********'];
// for( let i = 0; i < arryWithUsers.length; i++ ) {
//     console.log(arryWithUsers[i]);

//     if (arryWithUsers[i].Roman) {
//         console.log('Ми маємо розробника Романа');
//     }
// };



function countSubscribes() {
    const subscribes = [
        {name: 'Roman', rating: 100/100},
        {name: 'Artem', rating: 100/100},
        {name: 'Alona', rating: 100/100},
        {name: 'Vadym', rating: 100/100},
        {name: 'Oleksandr', rating: 100/100},
        {name: 'Tetiana', rating: 100/100},
        {name: 'Alex', rating: 100/100},
        {name: 'Inga', rating: 100/100},
        {name: 'Serhii', rating: 100/100},
    ];


    if (subscribes.length > 5) {
        alert('Маєш нормально!');
    } else {
        console.log(subscribes.length);
        throw new Error('Умова False');
    }

    const confirmValue = prompt('Напиши кого хочеш додати?')

    if (confirmValue !== '') {
        subscribes.push({confirmValue})
    }

    return console.log(subscribes);


}

countSubscribes();

