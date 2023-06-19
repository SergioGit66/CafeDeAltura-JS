const form = document.querySelector('.form-section form');
const inputsForm = document.querySelectorAll('.form-section form input');
const checked = document.getElementById('checkForm');
const nameUser = document.getElementById('nameForm');
const emailUser = document.getElementById('emailForm');
const phone = document.getElementById('numbersPhone');
const message = document.getElementById('textareaForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checked.checked && nameUser.value && emailUser.value && phone.value && message.value) {
        console.log(`User: ${nameUser.value} \nEmail: ${emailUser.value} \nPhone: ${phone.value} \nMessage: ${message.value}`);
    } else {
        console.log('El formulario no está completo o no has aceptado los términos.');
    }

    form.reset()
})
