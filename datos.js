const opciones = {
    matematicas :{
        default: 0,
        alias: 'm'
    },
    ingles: {
        default: 0,
        alias: 'i'
    },
    programacion: {
        demand: true, // default: pone un valor por defecto cuando no se define, 'demand': muestra las opciones disponibles y obliga a ingresar un valor 
        alias: 'p'
    },
    nombre: {
        dafault: 0,
        alias: 'n'
    }
}

const argv = require('yargs')
    .command('promedio', 'Calcular el promedio', opciones)
    .argv;


let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno + nota_dos + nota_tres) / 3;

module.exports = {
    argv,
    obtenerPromedio
}