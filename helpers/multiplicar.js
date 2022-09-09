const colors = require('colors')
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${index} X ${base} = ${index * base}\n`;
            consola += `${base} ${'X'.green} ${index} ${'='.green} ${index * base}\n`;
        }

        if (listar) {

            console.log('================='.green);
            console.log(' Tabla del:'.green, colors.blue(base))
            console.log('================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/table-${base}.txt`, salida);

        return `table-${base}.txt`;

    } catch (error) {

        throw error
    }
}

module.exports = {
    crearArchivo
}
