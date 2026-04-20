function calcular(){
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    
    let disponible = calcularDisponible(ingresos, egresos);
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));

    let capacidad = calcularCapacidadPago(disponible);
    mostrarEnSpan("spnCapacidadPago", capacidad.toFixed(2));

    let monto = recuperarFloat("txtMonto");
    let plazo = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");
    let interes = calcularInteresSimple(monto,tasa,plazo);
    mostrarEnSpan("spnInteresPagar", interes.toFixed(2));

    let total = calcularTotalPagar(monto, interes);
    mostrarEnSpan("spnTotalPrestamo", total.toFixed(2));

    let cuota = calcularCuotaMensual(total, plazo);
    mostrarEnSpan("spnCuotaMensual", cuota.toFixed(2));
}