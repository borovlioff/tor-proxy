import util from 'util';
import childProcess from "child_process"

export const exec = util.promisify(childProcess.exec);