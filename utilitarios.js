function recuperarTexto(idComponente){
    let componente=document.getElementById(idComponente);
    let valor = componente.value;

    return valor;
}
function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);

    return valorFloat;
}

function mostrarEnSpan(idComponente, valor){
    let elemento = document.getElementById(idComponente);
    elemento.innerText = valor;
}