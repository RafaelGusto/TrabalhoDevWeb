function doisInteiros() {

    var primeiro = document.getElementById("primeiroNumero").value;
    var segundo = document.getElementById("segundoNumero").value;
    var texto = document.getElementById("texto");

    if(Number(primeiro) > Number(segundo)){

        texto.innerHTML = `${segundo}, ${primeiro}`;

    }else{
        texto.innerHTML = `${primeiro}, ${segundo}`;

    }
}

//////////////////////////////////////////////////////

function calcularPeso() {

    var sexo = document.getElementById("sexo").value;
    var altura = document.getElementById("altura").value;
    var texto = document.getElementById("textoD");
    var pesoIdeal = "";

    if (sexo = "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    texto.innerHTML = `O seu pedo ideal é ${pesoIdeal}`;
}

/////////////////////////////////////////////////////

function tresInteiro() {
    
    var primeiro = document.getElementById("nUm").value;
    var segundo = document.getElementById("nDois").value;
    var terceiro = document.getElementById("nTres").value;
    var texto = document.getElementById("textoT");

    if (primeiro < segundo && primeiro < terceiro) {

        texto.innerHTML = `O menor número é ${primeiro}`;
    }

    if (segundo < primeiro && segundo < terceiro) {

        texto.innerHTML = `O menor número é ${segundo}`;
    }


    if (terceiro < segundo && terceiro < primeiro) {

        texto.innerHTML = `O menor número é ${terceiro}`;
    }

}

////////////////////////////////////////////////////

function numeroAbsoluto() {

var numero = document.getElementById("absoluto").value;
var texto = document.getElementById("textoQ");
var absoluto = Math.abs(numero);

if(numero > 0) {

    if (numero % 2 == 0) {

        texto.innerHTML = `O número ${numero} é par`;

    }else{

        texto.innerHTML = `O número ${numero} é impar`;

    }

} else {
    
    texto.innerHTML = `O valor absoluto é ${absoluto}`;

}

}

//////////////////////////////////////////////////

function divisivel() {

var numero = document.getElementById("nDivisivel").value;
var texto = document.getElementById("textoQui");

if(numero % 2 == 0 && numero % 3 == 0) {

    texto.innerHTML = `O número ${numero} é divisível por 2 e por 3`;

} else {
    
    texto.innerHTML = `O número ${numero} não é divisível por 2 e por 3`;

}

}

/////////////////////////////////////////////////

function divisivelSete() {

    var numero = document.getElementById("nDivisivelSete").value;
    var texto = document.getElementById("textoSex");
    
    if(numero % 2 == 0 && numero % 7 == 0) {

        texto.innerHTML = `O número ${numero} é divisível por 2 e por 7`;

    } else if(numero % 2 == 0 || numero % 7 == 0) {

        if(numero % 2 == 0) {

            texto.innerHTML = `O número ${numero} é divisível por 2, mas não é divisível por 7`;

        } else {

            texto.innerHTML = `O número ${numero} é divisível por 7, mas não é divisível por 2`;

        }

    } else {

        texto.innerHTML = `O número ${numero} não é divisível por 2 e nem por 7`;

    }
    
}

//////////////////////////////////////////////////

function diaSemana() {

    var dia = document.getElementById("dia").value;
    var texto = document.getElementById("textoS");

    switch(dia){

        case "1":
            texto.innerHTML = "dia 1 é Domingo";
            break;

        case "2":
            texto.innerHTML = "dia 2 é Segunda-feira";
            break;

        case "3":
            texto.innerHTML = "dia 3 é Terça-feira";
            break;

        case "4":
            texto.innerHTML = "dia 4 é Quarta-feira";
            break;

        case "5":
            texto.innerHTML = "dia 5 é Quinta-feira";
            break;

        case "6":
            texto.innerHTML = "dia 6 é Sexta-feira";
            break;

        case "7":
            texto.innerHTML = "dia 7 é Sábado";
            break;

    }

}

/////////////////////////////////////////////////////

function calcularPares() {

    var texto = document.getElementById("textoOit");
    var soma = 0;

    for(let i = 2; i < 20; i+= 2) soma += i;
    
    texto.innerHTML = soma;

}

////////////////////////////////////////////////////

function tabuada() {

    var numero = document.getElementById("tabuada").value;
    var texto = document.getElementById("textoTab");

    for(let i = 1; i < 11; i++){
        
        texto.innerHTML += `${numero} x ${i} = ${numero * i} |`;
    }

}

///////////////////////////////////////////////////

function fatorial() {

    var texto = document.getElementById("textoDec");
    var numero = document.getElementById("numFatorial").value;
    var resultado = numero;

    if(numero == 0) {

        texto.innerHTML = `O fatorial de 0 é 1`

    } else {

        for(var i = 1; i < numero; i++) {

            resultado *= i;

            texto.innerHTML = resultado;

        }

    }

}