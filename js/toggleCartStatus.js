function toggleCartStatus(){
    // console.log('toggleCartStatus');

    const cartWrapper = document.querySelector('.cart-wrapper');
    // console.log(cartWrapper.children.length);
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    const orderForm = document.querySelector('#order-form');

    if (cartWrapper.children.length > 0) {
        console.log('full');
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    }else{
        console.log('empty');
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }

}