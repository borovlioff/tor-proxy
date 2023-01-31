import {exec} from "./child_process-promiss.js";

export async function getTorPasswordHash({torccPath, password}){
    try {
        const res = await exec(`tor -f ${torccPath} --hash-password ${password}`);
        if(res?.stderr){
            throw new Error(res.stderr)
        } else {
            return res.stdout.replace("\n","")
        }
    } catch (error) {
        console.error(error)
    }
    
}

