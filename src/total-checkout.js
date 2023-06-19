
// function calcularPrecio() {
//     const subPrice = document.getElementById('price-productJs');
//     const sendPrice = document.getElementById('price-sendJs');
//     const totalPrice = document.getElementById('frame-cost');

//     let arrStorage = JSON.parse(localStorage.getItem('products'));

//     // Precio subtotal
//     let suma = 0;

//     arrStorage.forEach(product => {
//         let subtotal = product.price * product.count
//         suma += subtotal
//         subPrice.innerText = suma + ',00 €'

//     })

//     // Calcular envío
//     let inputValue = document.querySelectorAll('#radio');

//     sendPrice.innerText = 'GRATIS';
//     totalPrice.innerText = subPrice.innerText;
//     inputValue.forEach(input => {
//         input.addEventListener('click', () => {

//             if(input.value === 'free') {
//                 sendPrice.innerText = 'GRATIS';
//                 totalPrice.innerText = subPrice.innerText;
//             } else if(input.value === 'urgent') {
//                 sendPrice.innerText = 9 + ',00 ' + '€';
//                 totalPrice.innerText = parseInt(subPrice.innerText) + 9 + ',00 ' + '€'
//             }
//         })
//     })


// }

// calcularPrecio()

let prices = JSON.parse(localStorage.getItem('totalPrice'));
const subPrice = document.getElementById('price-productJs');
const sendPrice = document.getElementById('price-sendJs');
const totalPrice = document.getElementById('frame-cost');


subPrice.innerText = prices.subtotal;
sendPrice.innerText = prices.send;
totalPrice.innerText = prices.total;

// FORMULARIO
const inputsForm = document.querySelectorAll('.address-info input');
const selectForm = document.querySelector('.address-info select');
const form = document.querySelector('.address-info');
const checkButton = document.querySelector('#checkout-btn');
const payForm = document.querySelector('.pay-info');
const inputsPay = document.querySelectorAll('.pay-info input');
console.log(payForm);
console.log(checkButton);

form.addEventListener('input', () => {
    inputsForm.forEach(input => {
        if(input.value && selectForm.value) {
            checkButton.style.opacity = '1';
            checkButton.style.cursor = 'pointer';
            checkButton.addEventListener('click', () => {
                inputsPay.forEach(input => {
                    if(input.value) {
                        window.location.href = './payed.html'
                    } else {
                        console.log('none');
                    }
                })
            })
        } else {
            checkButton.style.opacity = '0.3';
            checkButton.style.cursor = 'not-allowed'
        }
    })
})

if(localStorage.length === 0 || localStorage.length === null) {
    const iconChest = document.querySelector('.numberCest');

    iconChest.style.display = 'none';
}