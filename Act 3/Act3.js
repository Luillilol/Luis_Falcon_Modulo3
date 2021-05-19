function preguntas(){
    si = confirm('Escriba "Derecha" o "Izquierda" según el camino que quiera escoger');
    for(let i=0; i<=1; i++){
        if(si){
            do{
                res = prompt('Escribe "Izquierda" o "Derecha"');
                if(res!== 'Izquierda' && res !== 'Derecha'){
                    alert('Introduzca "Izquierda" o "Derecha"');
                }
            }while(res!== 'Izquierda' && res !== 'Derecha');
        }          
        let tiempo = new Date().getTime() + (1000 * 60 );
        let fecha1 = new Date(tiempo).toUTCString();
        console.log(fecha1);
        document.cookie='cookie'+i+'='+res ; 'expire='+fecha1+'; path=/' ;
    }

    let cookies = document.cookie;
        let arrcookies = cookies.split('; ');
        let arreglo = [];
        for (const valor of arrcookies) {
            cookies = valor.split('=');
            arreglo.push(cookies);           
        }    
    console.log(arrcookies);
    console.log(arreglo);
    let opt1 = arreglo[0][1];
    let opt2 = arreglo[1][1];
    console.log(opt1);
    console.log(opt2);
    if(opt1 === 'Izquierda' && opt2 ==='Izquierda')
    {
        window.location = "./casa.html";
    }else if(opt1 === 'Izquierda' && opt2 ==='Derecha'){
        window.location = "./arbol.html";
    }else if(opt1 === 'Derecha' && opt2 ==='Izquierda'){
        window.location = "./hongo.html";
    }else if(opt1 === 'Derecha' && opt2 ==='Derecha'){
        window.location = "./bruja.html";
    }
}

if(document.cookie !== ""){
    let seconds = new Date().getTime() - (1000*60*60*24);
    let fecha = new Date(seconds).toUTCString();
    document.cookie= "cookie0=; expires="+fecha;
    document.cookie= "cookie1=; expires="+fecha;
}
console.log(document.cookie);  
let Temporizador = setTimeout(preguntas, 1000);


