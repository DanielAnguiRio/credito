//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let disponible = ingresos-egresos;
    if(disponible < 0){
        return 0;
    }else{
        return disponible;
    }
}

function calcularCapacidadPago(montoDisponible){
    let capacidad;

    capacidad = montoDisponible * 0.5;

    return capacidad;
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let interes;

    interes = monto * (tasa / 100) * plazoAnios;

    return interes;
}

function calcularTotalPagar(monto, interes){
    let total;

    total = monto + interes + 100;

    return total;
}

function calcularCuotaMensual(total, plazo){
    let meses;
    let cuota;

    meses = plazo * 12;
    cuota = total / meses;

    return cuota;
}

function aprobarCredito(capacidadPago, cuotaMensual){
    if(capacidadPago >= cuotaMensual){
        return true;
    }else{
        return false;
    }
}
