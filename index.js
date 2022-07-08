var input = document.querySelector(".input");
var result = document.querySelector(".result");
var output = document.querySelector(".output");

input.addEventListener("input", function () {
    result.innerText = input.value + "%";
    output.style.borderRadius = input.value + "%";
});