function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}




function redirecionar(){
    window.open("https://digitalinnovation.one/"); //Abre em outra aba
    //window.location.href = "https://digitalinnovation.one/"; // abre na mesma aba
}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}


function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    //var validar = true;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar
}


var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));
*/



/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count <= 5) {
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade: ")
//var idade = 18;
if (idade >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop()
//console.log(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//alert(lista)


//var nome = "Rafael Galleani";
//var idade = 29;
//var idade2 = 10;
//var n1 = 29;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(n1 * n2)
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toLocaleUpperCase());
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão","Brasil"));
