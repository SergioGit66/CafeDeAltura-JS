const containers = document.querySelectorAll('.title-chev');
const dividers = document.querySelectorAll('.divider');
const textShow = document.querySelectorAll('.faq-card small');
const checkedCard = document.querySelector('.checkedAdded');

dividers.forEach(divider => {
    divider.classList.toggle('show-answer')
})

textShow.forEach(text => {
    text.classList.toggle('show-answer')
})

containers.forEach(container => {
    container.addEventListener('click', e => {
        const divider =  container.nextElementSibling;
        const text = container.nextElementSibling.nextElementSibling;
        let imgChev = container.lastElementChild;
        divider.classList.toggle('show-answer')
        text.classList.toggle('show-answer');
        imgChev.classList.toggle('chevronDown-Up');
    })
})


// LocalStorage Carrito
const buttonAdd = document.querySelectorAll('.buttonAdd');



buttonAdd.forEach((button, i) => {

        let product = button.parentElement;
        let infoProduct = button.previousElementSibling;
        let titleProduct = infoProduct.firstElementChild.innerText;
        let priceProduct = infoProduct.lastElementChild.innerText;
        let imgProduct = button.previousElementSibling.previousElementSibling;

        let objProduct = {
            id: i,
            product: titleProduct,
            info: 'Paquete de café, 250 gr',
            price: parseFloat(priceProduct),
            img: imgProduct.src
        }
    button.addEventListener('click', () => {

        // arrProducts === null ? arrProducts = [objProduct] : arrProducts.push(objProduct);

        // Tarjeta checked producto añadido. Quitar el reload a la función add()

        // checkedCard.style.background = 'rgba(114, 186, 57, 0.5)';
        // checkedCard.style.border = '2px solid darkgreen';
        // checkedCard.style.textAlign = 'center';
        // checkedCard.innerText = `${objProduct.product} añadido al carrito`;
        // checkedCard.style.width = '300px';
        // checkedCard.style.height = '88px';
        // checkedCard.style.lineHeight = '24px';
        // checkedCard.style.fontWeight = 'bold';
        // checkedCard.style.borderRadius = '22px';

        // checkedCard.style.display = 'flex';
        // checkedCard.style.alignItems = 'center';
        // checkedCard.style.justifyContent = 'center';

        // setTimeout(()=> {
        //     checkedCard.style.display = 'none';
        // }, 1800)

        let arrProducts = JSON.parse(localStorage.getItem('products')) || [];

    const add = function(product) {
        let index = arrProducts.findIndex((item) => item.id === product.id);

        if(index === -1) {
            arrProducts.push({...product, count: 1})
        } else {
            arrProducts[index].count++;
        }

    localStorage.setItem('products', JSON.stringify(arrProducts));

    location.reload();
    }

    add(objProduct)

    })
});



if(localStorage.length === 0 || localStorage.length === null) {
    const iconChest = document.querySelector('.numberCest');

    iconChest.style.display = 'none';
}