// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde(>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento(recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento(con 4 dígitos)

const fecha_hoy = new Date()

const nac = new Date("1999-febrero-05");

const estarde = fecha_hoy > nac;

const dia_nac = nac.getDate()

const mes_nac = nac.getMonth() + 1

const anio_nac = nac.getFullYear()
