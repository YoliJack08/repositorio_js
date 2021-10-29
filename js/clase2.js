const usuario = prompt("Ingresa tu usuario:");
const pass = prompt("Ingresa contraseña:");
const edad = Number(prompt("Ingresa tu edad:"));

const adminValido = usuario == "admin" && pass == "Ad12min34" && edad >= 18;
const usuarioValido = (usuario == "usuario1" && pass == "User741" && edad >= 18) || (usuario == "usuario2" && pass == "User789" && edad == 20);
const usuarioNoValido = usuario == "usuario3" && pass == "User123" && edad < 15

/* Estructura IF básica */
if (adminValido) {
	alert("Bienvenido Admin");
} else if (usuarioValido) {
	alert("Bienvenido " + usuario);
} else if (usuarioNoValido) {
	alert(usuario + " no tienes acceso al sistema");
} else {
	alert("Datos incorrectos");
}


