const products = JSON.parse(localStorage.getItem('products'));
const divProducts = document.querySelector('#productAddedPayed');
const totalPrices = JSON.parse(localStorage.getItem('totalPrice'));

console.log(products);
console.log(totalPrices);


products.forEach(product => {
    const imgProduct = document.createElement('img');
    const infoProduct = document.createElement('div');
    const titleProduct = document.createElement('p');
    const detailsProduct = document.createElement('p');
    const priceproduct = document.createElement('p');
    const listProduct = document.createElement('div');

    listProduct.classList.add('listProduct');
    infoProduct.classList.add('detailsProduct');
    imgProduct.classList.add('imgProduct');
    titleProduct.classList.add('product-name');

    titleProduct.style.fontWeight = 'bold'
    priceproduct.style.fontWeight = 'bold';
    priceproduct.style.width = '82px';

    imgProduct.src = product.img;
    titleProduct.innerText = product.product;
    detailsProduct.innerText = product.info;
    priceproduct.innerText = parseFloat(product.price) * parseFloat(product.count) + ',00 €';


    divProducts.appendChild(listProduct);
    listProduct.appendChild(imgProduct)
    listProduct.appendChild(infoProduct)
    infoProduct.appendChild(titleProduct)
    infoProduct.appendChild(detailsProduct)
    listProduct.appendChild(priceproduct)
})

const subtotalPrice = document.getElementById('subtotalPayedSpan');
const sendPrice = document.getElementById('sendPayedSpan');
const totalPrice = document.getElementById('totalPayedSpan');

subtotalPrice.innerText = totalPrices.subtotal;
sendPrice.innerText = totalPrices.send;
totalPrice.innerText = totalPrices.total;


const buttonShop = document.querySelector('.content-payed button');

buttonShop.addEventListener('click', () => {
    localStorage.removeItem('products');
    localStorage.removeItem('totalPrice')

    window.location.href = './tienda.html'
})