//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){

    // 1. Leer valores
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    // 2. Calcular disponible
    let disponible = calcularDisponible(ingresos, egresos);

    // 3. Mostrar en pantalla
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));
}