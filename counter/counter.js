let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        let styles = e.currentTarget.classList;
        if(styles.contains("plus")) {
            count++;
        } else if(styles.contains("reset")) {
            count = 0;
        } else {
            count--;
        }
        value.textContent = count;
    })
})