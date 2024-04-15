let slide = document.getElementById("range");
let price = document.getElementById("price");

slide.oninput = function () {
    price.innerHTML = this.value
    views.innerHTML = this.value * 4
}

let toggle = document.getElementById("toggle");
let switcher = document.getElementById("switch")

let views = document.getElementById("views");

toggle.addEventListener("click", function () {
    if (switcher.classList.contains("left")) {
        switcher.classList.remove("left")
        switcher.classList.add("right")
        slide.min = "10"
        slide.max = "60"
        slide.value = "40"
        slide.step = "10"
        price.innerHTML = "10"
        document.getElementById("pay").innerHTML = "/ year"
    } else {
        switcher.classList.remove("right")
        switcher.classList.add("left")
        slide.min = "4"
        slide.max = "32"
        slide.value = "8"
        slide.step = "4"
        price.innerHTML = "8"
        document.getElementById("pay").innerHTML = "/ month"
    }
})

