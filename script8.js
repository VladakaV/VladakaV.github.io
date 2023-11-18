function click1(event) {
    window.location.href = 'https://vladakav.github.io/index3.html';
}


window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed")
    let button_popup = document.getElementById("open-popup")
    button_popup.addEventListener("click", click1)
})
