function Hello(nameP) {

    if (nameP == "") {
        return `Привет аноним!`;
    } else {
        return `Привет, ${nameP}!`;
    }
}

function HelloAlert() {
    let nameP = prompt("Введите имя: ");
    alert(Hello(nameP));
}

function HelloB() {
    let nameP = document.getElementById("idName").value;
    document.getElementById("idHello").innerHTML = Hello(nameP);
}