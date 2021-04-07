const fs = require('fs');
const color = require('colors');
const colors = require('colors/safe');

// const crearArchivo = ( base = 5 ) => {

//     return new Promise ( (resolve, reject) => {

//         console.log('================');
//         console.log('tabla del ' + base);
//         console.log('================');
    
//         let salida = '';
    
//         for (let i = 0; i <= 10; i++) {
//             salida += `${ base } x ${ i } = ${ base * i }\n`;
//         }
    
//         fs.writeFileSync( `tabla-${base}.txt`, salida);
    
//         resolve('tabla creada');
//     });
// }

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        console.log('================'.green);
        console.log('   Tabla del '.green + colors.yellow(base));
        console.log('================'.green);
    
        let salida = '';
        let consola = '';
    
        for (let i = 0; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.red} ${ i } = ${ base * i }\n`;
        }
    
        if (listar) console.log(consola);

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return('tabla creada');        
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}