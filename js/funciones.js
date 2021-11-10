


function banco (){

let dia =  prompt("Inserta un día de la semana:");
let hora = prompt("Inserte una hora en formato 24hrs:");
let diaMayus=dia.toUpperCase

if (diaMayus == "LUNES" || diaMayus == "MARTES" || diaMayus == "MIERCOLES" || diaMayus == "JUEVES" || diaMayus == "VIERNES"){
       if(hora >=9 && hora <=18){
           alert("Pasale antes de que cierren")
       }else{
            alert("No está abierto, el horario es de 9 a 18 horas")
       }
   }else if (diaMayus == "SABADO" || diaMayus == "DOMINGO"){
        alert("Día de descanso, ve entre semana");
   }else{
       alert("Invalid data, inserta un día");
   }
  
}

banco();


// const Vinicial = (d,t) => d/t ;
// const vg = t2 => 9.81 * t2;
// const Vfinal = (x,y) => x+y;

// let total = Vfinal (Vinicial(5,3), vg(10));

// console.log(total);
