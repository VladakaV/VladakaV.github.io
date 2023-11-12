let prices_and_autos = new Map([
    ["Porshe", 200],
    ["Toyota", 150],
    ["Chevrolet", 180],
    ["Lamborghini", 300],
    ["Lexus", 250]]
    );

function click1(event) {
    let result_text = document.getElementById("result")
    let count_of_product = parseInt(document.getElementsByName
            ("input-field-count")[0].value);
    let select_marks = document.getElementById("select-product")
    let select_value = select_marks.value
    for (let pair of prices_and_autos) {
        if (select_value == pair[0]) {
            if (select_value == "Porshe" || select_value == "Toyota") {
                if (isNaN(pair[1]*count_of_product)) {
                    result_text.innerHTML = "Неверно введено количество"
                }
                else {
                    let checkbox_choose = (document.querySelectorAll(".calculator-checkbox input[type=checkbox]"))[0]
                    if (checkbox_choose.checked == true) {
                        let summ_result = parseInt(count_of_product*(pair[1] + 15000))
                        result_text.innerHTML = "Цена = " + summ_result+ "р"
                        console.log("Галочка есть")
                    }
                    else {
                        result_text.innerHTML = "Цена = " + pair[1]*count_of_product  + "р"
                        console.log("Галочки нет")
                    }
                }
            }
            else if (select_value == "Chevrolet" || select_value == "Lamborghini") {
                if (isNaN(pair[1]*count_of_product)) {
                    result_text.innerHTML = "Неверно введено количество"
                }
                else {
                    let radio_choose = document.querySelectorAll(".calculator-radio input[type=radio]")
                    radio_choose.forEach(function(radio) {
                        if (radio.checked) {
                            if (radio.value == "speed") {
                                let summ_result = parseInt(count_of_product*(pair[1]+5000))
                                result_text.innerHTML = "Цена = " + summ_result  + "р"
                            }
                            else if (radio.value == "spoiler") {
                                let summ_result = count_of_product*(pair[1] + 3000)
                                result_text.innerHTML = "Цена = " +summ_result + "р"
                            }
                            else if (radio.value == "tone") {
                                let summ_result = count_of_product*(pair[1] + 4000)
                                result_text.innerHTML = "Цена = " + summ_result + "р"
                            }
                            else {
                                result_text.innerHTML = "Цена = " + pair[1]*count_of_product + "р"
                            }
                        }
                    })
                   
                }
            }
            else {
                if (isNaN(pair[1]*count_of_product)) {
                    result_text.innerHTML = "Неверно введено количество"
                }
                else {
                    result_text.innerHTML = "Цена = " + pair[1]*count_of_product + "р"
                }

            }
        }
    }
}

function change1(event) {
    let chosen_auto = document.getElementById("select-product").value
    for (let pair of prices_and_autos) {
        if (chosen_auto === pair[0]) {
            if (chosen_auto === "Porshe" || chosen_auto === "Toyota") {
                let radio_panel = document.getElementById("calculator-radio-choose")
                radio_panel.style.display = "none"
                let checkbox_panel = document.getElementById("calculator-checkbox-choose")
                checkbox_panel.style.display = "block"
            }
            else if (chosen_auto == "Chevrolet" || chosen_auto == "Lamborghini") {
                let radio_panel = document.getElementById("calculator-radio-choose")
                radio_panel.style.display = "block"
                let checkbox_panel = document.getElementById("calculator-checkbox-choose")
                checkbox_panel.style.display = "none"
            }
            else {
                let radio_panel = document.getElementById("calculator-radio-choose")
                radio_panel.style.display = "none"
                let checkbox_panel = document.getElementById("calculator-checkbox-choose")
                checkbox_panel.style.display = "none"
            }
        }
    }
}

window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed")
    let button_price = document.getElementById("button-price")
    button_price.addEventListener("click", click1)
    let select_marks = document.getElementById("select-product")
    select_marks.addEventListener("change", change1)
    let radio_panel = document.getElementById("calculator-radio-choose")
    radio_panel.style.display = "none"
    let checkbox_panel = document.getElementById("calculator-checkbox-choose")
    checkbox_panel.style.display = "block"
})