
// const { argv } = require('yargs');
// const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// const argv2 = require('yargs')
//         .option('l', {
//             alias : 'listar',
//             type: 'boolean',  
//         })

console.clear();

// console.log( process.argv );
console.log( argv );

// console.log(process.argv)
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base ] = arg3.split('=');

// console.log(base);

// const base = 2;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, 'Creado') )
    .catch( err => console.log(err) );