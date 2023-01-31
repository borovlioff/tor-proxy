import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const DIR_TOR_CONGIF = join(__dirname, process.env.DIR_TOR_CONGIF || "tor-config");
export const DIR_TOR_AUTH = join(__dirname, process.env.DIR_TOR_AUTH || "tor-auth");