
// let dia =  prompt("Inserta un día de la semana:");
// let hora = prompt("Inserte una hora en formato 24hrs:");

// function banco (dia, hora){
//     if (dia != "Sabado" || dia != "Domingo"){
//         if (hora >=9 && hora <=16){
//             alert("Adelante puedes acudir a la sucursal bancaria");
//         }else{
//                 alert("Estas fuera de horario laboral");
//             }
//         }else{ 
//         alert("Lo sentimos, no laboramos fines de semana");
//          }
//     } 

// banco(dia, hora);

let num1 =  Number(prompt("Dame un número:"));
let num2 = Number(prompt("Dame un segundo número:"));
const Vinicial = (d,t) => d/t ;
const vg = t2 => 9.81 * t2;
const Vfinal = (x,y) = x+y;

let total = Vfinal (Vinicial(5,3), vg(10));

console.log(total);