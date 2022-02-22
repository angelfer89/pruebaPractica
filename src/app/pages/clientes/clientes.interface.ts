export interface Cliente {
    nombre:         string;
    id:             string;
    direccion:      string;
    edad:           number;
    genero:         Genero;
}

export enum Genero {
    Masculino = "Masculino",
    Femenino = "Femenino",
}