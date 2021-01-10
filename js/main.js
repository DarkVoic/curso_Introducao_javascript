




function clicou(){

    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar");
}


function redirecionar(){

    window.open("https://www.lagoasanta.mg.gov.br/index.php/informacao-vagas-de-emprego");
    window.location.href="https://www.lagoasanta.mg.gov.br/index.php/informacao-vagas-de-emprego";

}

function trocar(){

    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    alert("Trocar texto");
}

function voltar(){

    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

// Passar função como parâmetro para outros Id:

function trocar(elemento){

    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){

    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){

    alert("Pagina carregada");
}

function funcaoChange(elemento){

    console.log(elemento.value);
}

// function soma(n1,n2){

//     return n1 + n2;
// }

// function validaIdade(idade){
  
//     var validar;

//     if(idade >= 18){
//         return validar = true;
//     }else{
//         return validar = false;
//     }
// }

// var idade = prompt("Qual sua idade? ");
// console.log("idade: " + idade + ", " + validaIdade(idade));

// function setReplace(frase,nome, novo_nome){

//     return frase.replace(nome, novo_nome);
// }

// alert(soma(4,12));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));


// var d = new Date();
// alert(d.getFullYear());



// var count;

// for(count = 0; count <= 5; count++){
//     alert(count);
// }




// var count = 0;
// while(count <= 5){

//     console.log(count);
//     alert(count);
//     count++;
// };


// var idade = prompt("Qual sua idade?")
// var idade = 18;

// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// };


// var fruta = [{nome: "maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
// console.log(fruta);
// alert(fruta[0].cor);

// /*-------------------//----------------------//------------------

// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista);
// console.log("tamanho da minha lista: " + lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" | "));

// /*-------------------//----------------------//------------------
// var nome = "Matheus Santos";
// var idade = 29;
// var idade2 = 10;
// var frase = "japão é o melhor time do mundo"
// alert(nome +" tem " + idade + " anos"); Cria um popUp de alerta no navegador
// console.log(nome);
// console.log(idade);
// console.log(frase.replace("japão","Brasil"));
// alert(frase.replace("japão", "Brasil"))*/