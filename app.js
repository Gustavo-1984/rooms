const {menu, pausa, editor} = require ('./helpers/inquirer.js')

const main = async() =>{
    let opt = ''

    do {

        opt = await menu()

        switch (opt) {
            case '1':
                await editor()
                break;
        }

         await pausa()

       

        
        
    } while (opt !== '0');
}

main()