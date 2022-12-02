const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});


const mifuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //     return "No es un numero"
    throw new Error("No es un numero, el valor debe ser un numero")
}

const numero = "s";

try {
    //codigo que puede fallar
    logger.info("Esta ejecutandose de manera correcta")
    const doble = mifuncion(numero)
    logger.info(doble)
} catch (e) {
    logger.error(`el valor de e es: ${e.toString()}`)
    //En caso de fallar, ejecutar esto
}

