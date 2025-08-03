// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; 




function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombrevalido(nombre)){
        amigos.push(nombre);
        actualizarLista();
        document.getElementById("amigo").value="";
    }else{
        alert("Por favor, ingrese un nombre")
    }
}

function nombrevalido(nombre){
    return nombre.trim() !=="";
}


function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML= "";
    amigos.forEach(function(amigo){
        let li = document.createElement("li");
        li.textContent= amigo;
        lista.appendChild(li)
    })
}


function sortearAmigo(){
    if (amigos.length===0){
        alert("No hay amigos para sortear")
    }else{
        let indiceAmigo=Math.floor(Math.random()*amigos.length)
        let amigoSorteado=amigos[indiceAmigo]
        document.getElementById("resultado").textContent="Amigo sorteado " + amigoSorteado;
    }
}
