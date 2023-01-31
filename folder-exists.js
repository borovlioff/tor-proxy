import {promises as fs} from "fs";
import path from "path";

export async function folderExists(pathDir){
    try {
        await fs.access(pathDir);
    } catch (error) {
        await fs.mkdir(pathDir);
    }
}