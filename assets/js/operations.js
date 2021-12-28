let a;
let b;

function getNumbers() {
    a = Number(prompt("Введите первое число"));
    b = Number(prompt("Введите второе число"));
}

function sum(a, b) {
    let rez;
    if (!isNaN(a) && !isNaN(b)) {
        rez = a + b;

    } else {
        rez = "Одно из введенных значений не является числом";

    }

    return rez;
}

function sub(a, b) {
    let rez;
    if (!isNaN(a) && !isNaN(b)) {
        rez = a - b;

    } else {
        rez = "Одно из введенных значений не является числом";

    }

    return rez;
}

function div(a, b) {
    let rez;
    if (!isNaN(a) && !isNaN(b)) {
        rez = a / b;
        if (rez === Infinity) rez = "Ошибка: деление на 0"

    } else {
        rez = "Одно из введенных значений не является числом";

    }

    return rez;
}

function mul(a, b) {
    let rez;
    if (!isNaN(a) && !isNaN(b)) {
        rez = a * b;

    } else {
        rez = "Одно из введенных значений не является числом";

    }

    return rez;
}


function sumB() {
    getNumbers(a, b);
    alert(`Сумма ${a} и ${b}: ${sum(a, b)}`);
}

function subB() {
    getNumbers(a, b);
    alert(`Разность ${a} и ${b}: ${sub(a, b)}`);
}

function divB() {
    getNumbers(a, b);
    alert(`Частное ${a} и ${b}: ${div(a, b)}`);
}

function mulB() {
    getNumbers(a, b);
    alert(`Произведение ${a} и ${b}: ${mul(a, b)}`);
}

function getRezult() {
    let firstNumber = Number(document.getElementById("idFirstNumber").value);
    let secondNumber = Number(document.getElementById("idSecondNumber").value);
    if (document.getElementById("idSum").checked) {
        document.getElementById("idRezult").value = sum(firstNumber, secondNumber)
    }
    if (document.getElementById("idSub").checked) {
        document.getElementById("idRezult").value = sub(firstNumber, secondNumber)
    }
    if (document.getElementById("idMul").checked) {
        document.getElementById("idRezult").value = mul(firstNumber, secondNumber)
    }
    if (document.getElementById("idDiv").checked) {
        document.getElementById("idRezult").value = div(firstNumber, secondNumber)
    }
    return false;



}