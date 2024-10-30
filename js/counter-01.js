// console.log('Hello from counter JS');


// Находим элементы для взаимодействия
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// console.log(btnMinus);
// console.log(btnPlus);
// console.log(counter);

//Отслеживаем клик на кнопку минус
btnMinus.addEventListener('click', function(){
    // console.log('Minus click');
    // Проверяем чтобы счетчик был больше 1
    if( parseInt(counter.innerText) > 1 ){
        // Изменяем тескт в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
    }
    
});

// Отслеживаем клик на кнопку плюс
btnPlus.addEventListener('click', function(){
    // console.log('Plus click');
    counter.innerText = ++counter.innerText;
});


