/* 
1.Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
2.Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
3.Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку. */

const count = 0.1 + 0.2;
const math = count.toFixed(1)
console.log(math);
// перше - виконано 

const numbers1plus2 = parseInt("1") + 2; 
console.log(numbers1plus2);
// друге - виконано 

function flashCard() {
    const flashSize = prompt('Вкажіть обсяг флешки (Кількість ГБ)');
    const gb = 1000;
    const file = 820;
    const revertFlashSize = flashSize * gb;
    const result = Math.floor(revertFlashSize / file);
    console.log(revertFlashSize);
    alert(`На FlashCard розмір ${flashSize} ГБ поміститься ${result} файлів розуміром 820 мб`)
}

// flashCard();
// третьє завдання виконано

/* 
1.Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
2.Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */

const wallet = document.querySelector('.input-wallet');
const price = document.querySelector('.input-price');
const countButton = document.querySelector('.btn-primary');
const alertResult = document.querySelector('.alert');
const buttonClear = document.querySelector('.btn-danger')

countButton.addEventListener('click', function(){
    if (wallet.value === '' || price.value === '') {
        alert('Введіть коректне значення в поле (заповність всі поля,цифри,без пробілів)');
    } else  {
        const total = wallet.value / price.value;
        alertResult.textContent = `На суму ${wallet.value} грн можна купити ${Math.floor(total)} шоколадок/ки`;
        alertResult.style.display = 'block';
    }
})

buttonClear.addEventListener('click' , function(){
    alertResult.style.display = 'none';
    wallet.value = price.value = ''
})
// завдання виконано 
