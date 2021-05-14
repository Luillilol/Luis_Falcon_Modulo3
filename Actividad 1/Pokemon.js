console.log('Hola mundo');

class Pokemon{
    constructor(Nombre, Naturaleza, Tipo, Nivel ,Vida, Ataque, Defensa, Velocidad){
        this.nombre=Nombre;
        this.naturaleza=Naturaleza;
        this.tipo=Tipo;
        this.vida=Vida;
        this.ataque=Ataque;
        this.defensa=Defensa;
        this.velocidad=Velocidad;
        this.nivel=Nivel;
    }

    Subir_nivel(){
        if(this.nivel == 100){
            console.log('Su pokémon está a nivel 100, no se puede incrementar más');
        }else{
            this.nivel++;
        console.log('Su pokemón ha subido de nivel ');
        console.log(this.nombre+' se encuentra en el nivel '+this.nivel);
        }
        if(this.naturaleza == 'Audaz'){
            this.ataque+=4;
        }else if(this.naturaleza == 'Osada'){
            this.defensa+=4;
        }else if(this.naturaleza == 'Cauta'){
            this.vida+=4;
        }else if(this.naturaleza == 'Alegre'){
            this.velocidad+=4;
        }
    }
    Presentarse(){
        console.log('Hola, me llamo '+this.nombre+', soy tipo '+this.tipo+' y estoy al nivel '+this.nivel);
    }
    Prom_estadisticas(){
         var prom = (this.vida + this.ataque + this.defensa + this.velocidad)/4;
         
        console.log('PROMEDIO: '+prom);
    }
}

const PIKACHU = new Pokemon('Pikachu', 'Audaz', 'Electrico', 50, 80, 30, 40, 50);
const CHARMANDER = new Pokemon('Charmander', 'Alegre', 'Fuego', 80, 70, 60, 20, 50);
const BULBASAUR = new Pokemon('Bulbasaur', 'Osada', 'Planta', 99, 70, 60, 60, 30);
const CATERPIE = new Pokemon('Caterpie', 'Cauta', 'Insecto', 90, 100, 30, 20, 15);
const METAPOD = new Pokemon('Metapod', 'Audaz' , 'Insecto', 20, 50, 30, 50, 40);


//Nombre, Naturaleza, Tipo, Nivel ,Vida, Ataque, Defensa, Velocidad


