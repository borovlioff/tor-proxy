import net from "net";

export async function portChek(port){
    return new Promise((resolve, reject) => {
        const socket = new net.Socket();

        socket.on("connect", () => {
            socket.destroy();
            resolve(true);
        });

        socket.on("timeout", () => {
            socket.destroy();
            resolve(false);
        });

        socket.on("error", () => {
            socket.destroy();
            resolve(false);
        });

        socket.connect(port, host);

    });
}

class PortChecker {

    async testPort(port, host) {

        return new Promise((resolve, reject) => {
            const socket = new net.Socket();

            socket.on("connect", () => {
                socket.destroy();
                resolve("yes");
            });

            socket.on("timeout", () => {
                socket.destroy();
                resolve("no");
            });

            socket.on("error", () => {
                socket.destroy();
                resolve("no");
            });

            socket.connect(port, host);

        });
    }

}