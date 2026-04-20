function validarFormulario(){

    let valido = true;

    valido &= validarCampo("txtIngresos","errIngresos",1,99999,false);
    valido &= validarCampo("txtEgresos","errEgresos",0,99999,true);
    valido &= validarCampo("txtMonto","errMonto",1,99999,false);
    valido &= validarCampo("txtPlazo","errPlazo",1,30,false);
    valido &= validarCampo("txtTasaInteres","errTasa",1,100,false);

    return Boolean(valido);
}

function validarCampo(idInput, idError, min, max, permiteCero){

    let input = document.getElementById(idInput);
    let error = document.getElementById(idError);
    let valor = input.value.trim();

    input.classList.remove("input-error","input-ok");

    if(valor === ""){
        error.innerText = "Campo obligatorio";
        input.classList.add("input-error");
        return false;
    }

    if(isNaN(valor)){
        error.innerText = "Solo números";
        input.classList.add("input-error");
        return false;
    }

    if(valor.length > 5){
        error.innerText = "Máximo 5 dígitos";
        input.classList.add("input-error");
        return false;
    }

    let num = parseFloat(valor);

    if(!permiteCero && num <= 0){
        error.innerText = "Debe ser mayor a 0";
        input.classList.add("input-error");
        return false;
    }

    if(permiteCero && num < 0){
        error.innerText = "No puede ser negativo";
        input.classList.add("input-error");
        return false;
    }

    if(num < min || num > max){
        error.innerText = `Rango permitido: ${min} - ${max}`;
        input.classList.add("input-error");
        return false;
    }

    error.innerText = "";
    input.classList.add("input-ok");

    return true;
}

function calcular(){

    if(!validarFormulario()){
        return;
    }

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

    let aprobado = aprobarCredito(capacidad, cuota);

    if(aprobado){
        mostrarEnSpan("spnEstadoCredito", "CREDITO APROBADO");
    }else{
        mostrarEnSpan("spnEstadoCredito", "CREDITO RECHAZADO");
    }
}