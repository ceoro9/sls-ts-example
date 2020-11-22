//
// Flags
//

export const IS_LOCAL = process.env.IS_LOCAL === 'true';

//
// Servert port
//

const DEFAULT_PORT = 3000;
const SERVER_PORT  = parseInt(process.env.LOCAL_PORT);

export const LOCAL_PORT = Number.isNaN(SERVER_PORT) ? DEFAULT_PORT : SERVER_PORT;
