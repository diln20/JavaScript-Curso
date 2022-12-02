import * as controller from './modulo/controller.js'
import chalk from 'chalk';
//(https://www.npmjs.com/package/chalk)
const sumar=controller.suma(2,3)

const multiplicar=controller.multiplicacion(4,5)


console.log(chalk.green(controller.multiplicacion(sumar,multiplicar)))


