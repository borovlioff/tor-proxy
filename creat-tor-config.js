import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid"
import { DIR_TOR_AUTH, DIR_TOR_CONGIF } from "./PATCH.js"
import path from 'path';
import { folderExists } from "./folder-exists.js";
import { TOR_PASSWORD_CONTROLLER } from "./ENV.js";
import { getTorPasswordHash } from "./get-tor-password-hash.js";



export async function creatTorConfig({ port }) {
    try {
        await folderExists(DIR_TOR_AUTH);
        await folderExists(DIR_TOR_CONGIF);
        const id = uuidv4();
        const pathAuthDir = path.join(DIR_TOR_AUTH, id);
        const pathConfigDir = path.join(DIR_TOR_CONGIF, id + ".");

        const config = `SocksPort ${port}\nControlPort ${port + 1}\nDataDirectory ${pathAuthDir}\n`;
        await fs.writeFile(pathConfigDir, config);
        const password = await getTorPasswordHash({ torccPath: pathConfigDir, password: TOR_PASSWORD_CONTROLLER });
        if(password){
            await fs.appendFile(pathConfigDir, `HashedControlPassword ${password}`);
        } else {
            await fs.rm(pathConfigDir);
            await fs.rm(pathAuthDir);
        }
       
        console.log(pathAuthDir);
        console.log(pathConfigDir);
        console.log(config);

    } catch (error) {
        console.error(error);
    }

}

creatTorConfig({ port: 10001 });