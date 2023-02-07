var cargador = document.querySelector(".container");

function validacion() {
  var formvalido = true;
  var nom = document.getElementById("nombre").value;

  if (nom == null || nom.length == 0) {
    alert("El nombre esta vacio");
    formvalido = false;
  }

  var ape = document.getElementById("apellido").value;
  if (ape == null || ape.length == 0) {
    alert("El apellido esta vacio");
    formvalido = false;
  }

  var validar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,4})+$/;
  var correo = document.getElementById("email").value;
  if (!validar.test(correo)) {
    alert("Correo incorrecto");
    formvalido = false;
  }

  var telefono = document.getElementById("numero").value;
  if (isNaN(telefono)) {
    alert("No es un numero de telefono");
    formvalido = false;
  } else if (telefono == null || telefono == "") {
    alert("Introduce tu numero de telefono");
    formvalido = false;
  }

  var contra = document.getElementById("password").value;
  if (contra == "" || contra == null) {
    alert("Introduce tu contraseña");
    formvalido = false;
  } else if(contra.length <8 ){
    alert('La contraseña es debil')
    formvalido = false;
  }

  return formvalido;
}

setTimeout(() => {
  cargador.classList.add("cerrarCargador");
}, 9000);
