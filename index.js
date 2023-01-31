import {getTorConfigs} from "./get-tor-configs.js"
import { startTorByConfig } from "./start-tor-by-config.js";



async function start(){
    const configs = await getTorConfigs();
    console.log(configs);
    const torInstans = [];
    if(configs.length > 0){
        for(let i = 0; i < configs.length; i++){
            let status = await startTorByConfig(configs[i]);
            torInstans.push(status);
            console.log(status);
        } 
    }
    
}

start();