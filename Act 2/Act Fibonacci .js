const larMatX = (Math.floor(Math.random() *10)+1);
const larMatY = (Math.floor(Math.random() *10)+1);
console.log(larMatX);
console.log(larMatY);
let gusanito = [];

let cont =0;
let suma1 = 0;
let suma2 = 1;
let numeros = 0;

for(var i=0; i<larMatY; i++)
{
   gusanito[i]=new Array();   
    for(var j=0; j<larMatX; j++){
        suma1 = suma2;
        suma2 = numeros;
        numeros = suma2 + suma1;
        gusanito[i].push(numeros);
    }
    if(i%2!=0){
       gusanito[i].reverse();
    }
}
console.log(gusanito);

