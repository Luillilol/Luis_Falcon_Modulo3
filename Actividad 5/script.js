window.addEventListener('load', ()=>{
    let contador = 0;
      const jugar = document.getElementById('jugar_div');
      jugar.addEventListener('click', ()=>{
        //hago un arreglo que va a guardar el patron
        function brillo(boton, check){
          if(check === 0){
            if(boton === 1 ){
              boton1.style.backgroundColor = "#ffff00";
            }else if(boton === 2){
              boton2.style.backgroundColor = "#00ff00";
            }else if(boton == 3){
              boton3.style.backgroundColor = "#0000ff";
            }else if(boton === 4){
              boton4.style.backgroundColor = "#ff0000";
            }
          }else if(check === 1){
            if(boton === 1 ){
              boton1.style.backgroundColor = "#acac00";
            }else if(boton === 2){
              boton2.style.backgroundColor = "#0f9c0f";
            }else if(boton == 3){
              boton3.style.backgroundColor = "#040488";
            }else if(boton === 4){
              boton4.style.backgroundColor = "#990b0b";
            }
          }      
        }
        function ganar(){
          base.style.left = "200%";
          jugar.style.left = "200%";
          ganaste.style.display = "block";
          nuevo.style.display = "block";
        }
    
        function perder(){
          base.style.left = "200%";
          jugar.style.left = "200%";
          perdiste.style.display = "block";
          nuevo.style.display = "block";      
        }
        
        pasos = new Array();
        for(let i=0; i<5; i++)
        {
          //genero 5 pasos
          let paso = Math.round(Math.random()*3)+1;
          pasos.push(paso);
        }
        
        const boton1 = document.getElementById('amarillo');
        const boton2 = document.getElementById('verde');
        const boton3 = document.getElementById('azul');
        const boton4 = document.getElementById('rojo');
        const base = document.getElementById("base");
        const perdiste = document.getElementById("perder");
        const ganaste = document.getElementById("ganar");
        const nuevo = document.getElementById("nuevo");
        //1 = amarillo, 2 = verde, 3 = azul, 4 = rojo
       
        //declaro arreglo para los htmls croe que se deberia de llamar elementos
    
       new Promise((resolve)=>{
            setTimeout(()=>{
              brillo(pasos[0], 0);
              resolve();
            }, 500);   
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[0], 1);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[1], 0);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[1], 1);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[2], 0);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[2], 1);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[3], 0);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[3], 1);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[4], 0);
                  resolve();
                }, 500)
              })
            }).then(()=>{
              return new Promise((resolve)=>{
                setTimeout(()=>{
                  brillo(pasos[4], 1);
                  resolve();
                }, 500)
              })
            })
        const amarillo = document.getElementById('amarillo');
        amarillo.addEventListener('click', ()=>{
          if(1 === pasos[contador]){
            if(contador === 4){
              ganar();
            }
          }else{
            perder();
          }
          contador++;
        })
        const verde = document.getElementById('verde');
        verde.addEventListener('click', ()=>{
          if(2 === pasos[contador]){
            if(contador === 4){
              ganar();
            }
          }else{
            perder();
          }
          contador++;
        })
        const azul = document.getElementById('azul');
        azul.addEventListener('click', ()=>{
          if(3 === pasos[contador]){
            if(contador === 4){
              ganar();
            }
          }else{
            perder();
          }
          contador++;
        })
        const rojo = document.getElementById('rojo');
        rojo.addEventListener('click', ()=>{
          if(4 === pasos[contador]){
            if(contador === 4){
              ganar();
            }
          }else{
            perder();
          }
          contador++;
        })
        nuevo.addEventListener("click", ()=>{
          window.location.reload();
        })
      }) 
    })