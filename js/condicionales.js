let usuario = prompt("Ingresa tu usuario:");
let pass = prompt("Ingresa contraseña:");
let edad = Number(prompt("Ingresa tu edad:"));

let adminValido = usuario == "admin" && pass == "Ad12min34" && edad >= 18;
let usuarioValido = (usuario == "usuario1" && pass == "User741" && edad >= 18) || (usuario == "usuario2" && pass == "User789" && edad == 20);
let usuarioNoValido = usuario == "usuario3" && pass == "User123" && edad < 15

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


