// Llamando al localStorage
const products = JSON.parse(localStorage.getItem('products'));
console.log(products)

const divProducts = document.querySelector('.productAdded');
const totalCest = document.querySelector('#cuantity');

products.forEach(product => {
    const listProduct = document.createElement('div');
    const buttonsContainer = document.createElement('div');
    const buttonRest = document.createElement('button');
    const counter = document.createElement('p');
    const buttonAdd = document.createElement('button');
    const imgProduct = document.createElement('img');
    const infoProduct = document.createElement('div');
    const titleProduct = document.createElement('p');
    const detailsProduct = document.createElement('p');
    const priceproduct = document.createElement('p');
    const chevImgRest = document.createElement('img');
    const chevImgAdd = document.createElement('img');

    listProduct.classList.add('product');
    buttonsContainer.classList.add('counter');
    imgProduct.classList.add('img-product');
    infoProduct.classList.add('details');
    titleProduct.classList.add('product-name');
    detailsProduct.classList.add('product-info');

    // Adding chevrons
    chevImgRest.src ='../assets/img/rest.svg';
    chevImgAdd.src ='../assets/img/plus.svg';
    buttonRest.appendChild(chevImgRest)
    buttonAdd.appendChild(chevImgAdd);
    imgProduct.src = product.img;

    // Counter div
    const divCounter = document.createElement('div');
    divCounter.appendChild(counter)

    // Counter
    counter.innerText = product.count;

    // Adding info
    titleProduct.innerText = product.product;
    detailsProduct.innerText = product.info;
    priceproduct.innerText = parseFloat(product.price) * parseFloat(product.count) + ',00 €';

    // Styles
    priceproduct.style.fontWeight = 'bold';
    priceproduct.style.width = '82px';
    divCounter.style.backgroundColor = 'rgba(42, 91, 69, 0.1)';
    divCounter.style.width = '24px';
    divCounter.style.height = '24px';
    divCounter.style.borderRadius = '50%';
    divCounter.style.display = 'flex';
    divCounter.style.justifyContent = 'center';
    divCounter.style.alignItems = 'center';
    counter.style.fontSize = '12px';
    counter.style.lineHeight = '16px';
    counter.style.color = '#2A5B45';


    // Buttons Listener
    buttonRest.addEventListener('click', () => {
        product.count--;
        counter.innerText = product.count;

        const rest = function(product) {

            if(product.count === 0) {

                let arr = JSON.parse(localStorage.getItem('products'));
                console.log(arr);
                let index = arr.findIndex((item) => product.id === item.id)
                console.log(index, product, arr[product]);
                arr.splice(index, 1);

                console.log(arr);
                localStorage.setItem('products', JSON.stringify(arr));
                location.reload();
            } else {
                let arrProducts = JSON.parse(localStorage.getItem('products'));
                let index = arrProducts.findIndex((item) => item.id === product.id);
                arrProducts[index].count--;
                localStorage.setItem('products', JSON.stringify(arrProducts));
            }

        }
        rest(product)

        const price = function(product) {
            let arr = JSON.parse(localStorage.getItem('products'));
            let index = arr.findIndex((item) => item.id === product.id);
            priceproduct.innerText = (arr[index].price * arr[index].count) + ',00 €';
            localStorage.setItem('products', JSON.stringify(arr));

        }

        location.reload();

        price(product)
        calcularPrecio()

    });

    buttonAdd.addEventListener('click', () => {
        product.count++;
        counter.innerText = product.count;

        let arrProducts = JSON.parse(localStorage.getItem('products'));

        const add = function(product) {
            let index = arrProducts.findIndex((item) => item.id === product.id);
            if(index === -1) {
                arrProducts.push({...product, count: 1})
            } else {
                arrProducts[index].count++;
            }

        localStorage.setItem('products', JSON.stringify(arrProducts));
        }
        add(product)

        const price = function(product) {
            let arr = JSON.parse(localStorage.getItem('products'));
            let index = arr.findIndex((item) => item.id === product.id);
            priceproduct.innerText = parseInt((arr[index].price * arr[index].count)) + ',00 €';
            localStorage.setItem('products', JSON.stringify(arr));

        }

        location.reload()

        price(product)
        calcularPrecio()
    })


    // Adding to HTML
    divProducts.appendChild(listProduct);
    listProduct.appendChild(buttonsContainer)
    buttonsContainer.appendChild(buttonRest)
    buttonsContainer.appendChild(divCounter);
    buttonsContainer.appendChild(buttonAdd)
    listProduct.appendChild(imgProduct)
    listProduct.appendChild(infoProduct)
    infoProduct.appendChild(titleProduct)
    infoProduct.appendChild(detailsProduct)
    listProduct.appendChild(priceproduct)

})


function calcularPrecio() {
    const subPrice = document.getElementById('price-productJs');
    const sendPrice = document.getElementById('price-sendJs');
    const totalPrice = document.getElementById('frame-cost');

    let arrStorage = JSON.parse(localStorage.getItem('products'));

    if(arrStorage.length === 0) {
        let inputValue = document.querySelectorAll('#radio');
        inputValue.forEach(input => {
            input.style.display = 'none'
        })
    } else {
        // Precio subtotal
    let suma = 0;

    arrStorage.forEach(product => {
        let subtotal = product.price * product.count
        suma += subtotal
        subPrice.innerText = suma + ',00 €'

    })

    // Calcular envío
    let inputValue = document.querySelectorAll('#radio');

    sendPrice.innerText = 'GRATIS';
    totalPrice.innerText = subPrice.innerText;
    inputValue.forEach(input => {
        input.addEventListener('click', () => {

            if(input.value === 'free') {
                sendPrice.innerText = 'GRATIS';
                totalPrice.innerText = subPrice.innerText;
            } else if(input.value === 'urgent') {
                sendPrice.innerText = 9 + ',00 ' + '€';
                totalPrice.innerText = parseInt(subPrice.innerText) + 9 + ',00 ' + '€'
            }
        })
    })
    }

    let buttonCheck = document.querySelector('#checkout-pay');

    buttonCheck.addEventListener('click', () => {
        let objPrice = {
            subtotal: subPrice.innerText,
            send: sendPrice.innerText,
            total: totalPrice.innerText
        }
        localStorage.setItem('totalPrice', JSON.stringify(objPrice));
    })

}

// Total cest text
const countTotal = products.reduce((total, product) => {
    return total + product.count
}, 0);


if(countTotal === 0 || totalCest.innerText === null || totalCest.innerText === 'undefined') {
    const buttonToPay = document.getElementById('checkout-pay').disabled = true;
} else {
    calcularPrecio();
}


totalCest.innerText = '(' + countTotal + ')';

if(countTotal !== 0) {
    // total cest img
    const cestCount = document.querySelector('#cuantityChest');
    cestCount.style.color = '#fff';

    cestCount.textContent = countTotal;
} else {
    const numberCest = document.querySelector('.numberCest');
    numberCest.style.display = 'none'
}

if(localStorage.length === 0 || localStorage.length === null) {
    const iconChest = document.querySelector('.numberCest');

    iconChest.style.display = 'none';
}

