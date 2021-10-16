const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

// btn.addEventListener("click", ()=> {
//     nav.classList.toggle("active");
//     btn.classList.toggle("active");
// }) // тоже рабочий вариант

btn.onclick = function() {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
}