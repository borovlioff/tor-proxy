import {exec} from "./child_process-promiss.js";


export async function startTorByConfig(config){
    try {
       return await exec(`sudo tor -f ${ config}`)
       
    } catch (error) {
        console.error(error)
    }
}