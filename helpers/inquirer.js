const inquirer = require('inquirer');
require('colors'); 
const {rooms} = require('../models/iluminacion')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Seleccionar archivo`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            },
            
        ]
    }
];



const menu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white );
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const editor = async( ) => {

    const question = [
        {
            type: 'editor',
            name: 'edit',
            message: 'Ingrese la matriz quedesea evaluar',
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un archivo';
                }
                return true;
            }
        }
    ];

    const { edit } = await inquirer.prompt(question);
    const res = await edit
    const respuesta = await rooms(res)
    console.log(respuesta) 
    return edit;
}


const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}   




module.exports = {
    menu,
    pausa,
    editor,
    confirmar,
}
