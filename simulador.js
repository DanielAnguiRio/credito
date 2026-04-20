function calcular(){

    // 1. Leer datos
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    // 2. Calcular disponible
    let disponible = calcularDisponible(ingresos, egresos);

    // 3. Mostrar disponible
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));

    // 4. Calcular capacidad de pago
    let capacidad = calcularCapacidadPago(disponible);

    // 5. Mostrar capacidad de pago
    mostrarEnSpan("spnCapacidadPago", capacidad.toFixed(2));
}