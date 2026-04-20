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

    // 6. Datos credito
    let monto = recuperarFloat("txtMonto");
    let plazo = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");

    // 7. Calcular interes
    let interes = calcularInteresSimple(monto,tasa,plazo);

    // 8. Mostrar interes a pagar
    mostrarEnSpan("spnInteresPagar", interes.toFixed(2));

    let total = calcularTotalPagar(monto, interes);

    mostrarEnSpan("spnTotalPrestamo", total.toFixed(2));
}