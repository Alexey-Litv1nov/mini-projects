let text = "Спасибо, что зашли на этот репозиторий и посмотрели эти небольшие забавные штуки <3";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0,index);
    index++;

    if(index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 150);