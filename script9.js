let formData = {}
let form = document.querySelector('form')
let button_sumbit = document.getElementById("button_submit");
const LS = localStorage;

form.addEventListener('input', function(event) {
    if (event.target.type === 'checkbox') {
        formData[event.target.name] = event.target.checked ? 'on' : 'off';
    }
    else {
        formData[event.target.name] = event.target.value;
    }
    LS.setItem('formData', JSON.stringify(formData))
});

if (LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));
    for (let key in formData) {
        if (form.elements[key].type === 'checkbox' && formData[key] === 'on') {
            form.elements[key].checked = true;
        }
        else {
            form.elements[key].value = formData[key];
        }
    }
}

button_sumbit.addEventListener('click', function(event) {
    event.preventDefault();
    let formDataToSend = new FormData();
    for (let key in formData) {
        formDataToSend.append(key, formData[key]);
    }
    fetch('https://formcarry.com/s/UO8fy-mz8P', {
        method: 'POST',
        body: formDataToSend
    })
    .then (response => {
        if (response.ok) {
            window.alert("Данные отправлены и сохранены на сервере!");
        }
        else {
            window.alert("Произошла ошибка при отправке данных");
        }
        for (let key in formData) {
            if (form.elements[key].type === 'checkbox' && formData[key] === 'on') {
                form.elements[key].checked = false; 
            }
            else {
                form.elements[key].value = null;
            }
        }
        LS.clear();
        formData = {};
    })
    .catch(error => {
        console.log("Ошибкa:", error);
    });
})


