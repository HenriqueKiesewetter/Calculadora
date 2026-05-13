document.addEventListener("submit", function (e) {
let tela = document.getElementById("tela");

    e.preventDefault();
// números
document.getElementById("n1").onclick = () => tela.innerText += "1";
document.getElementById("n2").onclick = () => tela.innerText += "2";
document.getElementById("n3").onclick = () => tela.innerText += "3";
document.getElementById("n4").onclick = () => tela.innerText += "4";
document.getElementById("n5").onclick = () => tela.innerText += "5";
document.getElementById("n6").onclick = () => tela.innerText += "6";
document.getElementById("n7").onclick = () => tela.innerText += "7";
document.getElementById("n8").onclick = () => tela.innerText += "8";
document.getElementById("n9").onclick = () => tela.innerText += "9";
document.getElementById("n0").onclick = () => tela.innerText += "0";

let n1 = document.getElementById("1").value;
let n2 = document.getElementById("2").value;
let n3 = document.getElementById("3").value;
let n4 = document.getElementById("4").value;
let n5 = document.getElementById("5").value;
let n6 = document.getElementById("6").value;
let n7 = document.getElementById("7").value;
let n8 = document.getElementById("8").value;
let n9 = document.getElementById("9").value;
let n0 = document.getElementById("0").value;
let apaga = document.getElementById("apaga").value;
let igual = document.getElementById("igual").value;
let mais = document.getElementById("+").value;
let menos = document.getElementById("-").value;
let x = document.getElementById("x").value;
let divide = document.getElementById("divide").value;
});
// simbolos
document.getElementById("mais").onclick = () => tela.innerText += "+";
document.getElementById("menos").onclick = () => tela.innerText += "-";
document.getElementById("x").onclick = () => tela.innerText += "*";
document.getElementById("divide").onclick = () => tela.innerText += "/";

// apaga
document.getElementById("apaga").onclick = () => {
    tela.innerText = tela.innerText.slice(0, -1);
};

// igual
document.getElementById("igual").onclick = () => {
    try {
        tela.innerText = eval(tela.innerText);
    } catch {
        tela.innerText = "Deu erro";
    }
};