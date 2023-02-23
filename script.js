function validacion(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("mail").value;
    var texto = document.getElementById("comment").value;
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (nombre === '') {
        document.getElementById("errorNombre").style.display="block";
    }else {
        document.getElementById("errorNombre").style.display="none";
    }

    if (email.length != 0 && emailRegex.test(email)) {
        document.getElementById("errorEmail").style.display="none";
    }else {
        document.getElementById("errorEmail").style.display="block";
    }

    if (texto === '') {
        document.getElementById("errorTexto").style.display="block";
    }else {
        document.getElementById("errorTexto").style.display="none";
    }
    if (nombre && email && texto){
        document.getElementById("mensaje").style.display="block";
    }
}






