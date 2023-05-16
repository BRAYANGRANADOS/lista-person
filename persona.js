class Persona{
    constructor(nombre,apellido,carnet){
        this._nombre = nombre;
        this._apellido = apellido;
        this._carnet = carnet;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get carnet(){
        return this._carnet;
    }
    
    set carnet(carnet){
        this._carnet = carnet;
    }
}