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