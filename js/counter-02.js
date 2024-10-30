// Добавляем прослушку на всем окне
window.addEventListener('click', function(event){
    // console.log('Click window!');
    // console.log(event.target.dataset.action);

    // Объявляем переменную для счетчика
    let counter;

    // Проверяем клик строго по кнопкам плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // console.log(counterWrapper);

        // Находим div с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
        // console.log(counter);
        
    }
   
    // Проверяем является ли элемент, по которому был совершен клик кнопкой плюс
    if (event.target.dataset.action === 'plus'){
        // console.log('Plus');
        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент, по которому был совершен клик кнопкой минус
    if (event.target.dataset.action === 'minus'){
        // console.log('Minus');
        // Проверка на товар, который находится в корзине
        // if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
        //     console.log('IN CART!!!!!!!!!!!');
        //     // Удаляем товар из корзины
        //     event.target.closest('.cart-item').remove();
        // }

        // Проверяем чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            // Изменяем тескт в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Проверка на товар, который находится в корзине
            console.log('IN CART!!!!!!!!!!!');
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // Отображение статуса корзины Пустая / Полная
            toggleCartStatus();

            //Пересчет общей стомости товаров в корзине
            calcCartPriceAndDelivery();
        }



    }

    // Проверяем клик на плюс или минус внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {    
        //Пересчет общей стомости товаров в корзине
        calcCartPriceAndDelivery();
    }

});  