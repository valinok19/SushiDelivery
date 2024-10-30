function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryPriceEl = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');


    const cartItems = document.querySelectorAll('.cart-item');
    // console.log(cartItems);

    // Общая стоимость товаров
    let totalPrice = 0;

    // Обходим все блоки с ценами в корзине
    cartItems.forEach(function(item){
        // console.log(item);
        // Находим количество товара
        const amountEl = item.querySelector('[data-counter]');
        // Находим стоимость одной единицы товара
        const priceEl = item.querySelector('.price__currency');
        // Считаем стоимость данного товара
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        // console.log(currentPrice);
        // Добавляем стоимость данного товара в общую стоимость
        totalPrice += currentPrice;
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = totalPrice;
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (totalPrice<600) {
        deliveryPriceEl.classList.remove('free');
        deliveryPriceEl.innerText = '250 ₽';
    }else {
        deliveryPriceEl.classList.add('free');
        deliveryPriceEl.innerText = 'бесплатно';
    }

}
