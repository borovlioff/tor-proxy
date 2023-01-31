import {promises as fs} from "fs";
import { join } from "path";
import {DIR_TOR_CONGIF} from "./PATCH.js"


export async function getTorConfigs(){
   const files = await fs.readdir(DIR_TOR_CONGIF);
   return files.map((file)=>{
      return join(DIR_TOR_CONGIF,file)
   })
}

