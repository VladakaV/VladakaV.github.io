function click1(event) {
    let prices_and_autos = new Map([['Porshe', 200], ['Toyota', 150], ['Chevrolet', 180], ['Lamborghini', 300], ['Lexus', 250]])
    let count_of_product = parseInt(document.getElementsByName("input-field-count")[0].value)
    let chosen_auto = document.getElementById("select-product").value
    let result_text = document.getElementById("result")
    for (let pair of prices_and_autos) {
        if (chosen_auto === pair[0]) {
            if (isNaN(pair[1]*count_of_product)) {
                result_text.innerHTML = "Неверно введено количество"
            }
            else {
                result_text.innerHTML = "Цена = " + pair[1]*count_of_product + "р"
            }
            break
        }
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed")
    let button_price = document.getElementById("button-price")
    button_price.addEventListener("click", click1)
})