//funcion para index.html
function obtenerNombre(){
    var nombre= document.getElementById("user_name").value;
    localStorage.setItem("name",nombre)
   }
   
   //funcion para saludo.html
   function cambiarNombre() {
   var persona=localStorage.getItem("name");
   document.getElementById("saludo").innerHTML = "¡Hola " + persona+"!";
   }
   
   