import { Socket } from "socket.io";
import { wsIO as webSocket } from "./server.js";


// Active Sockets //
const activeSockets: Array<{
    userId: string,
    socketId: string
}> = [];


webSocket.on("connection", (socket) => {
    setupWebsocketConnection(socket);
})

const setupWebsocketConnection = (socket: Socket) => {
    socket.on('setup-connection', (data: string) => {
        activeSockets.push({userId: data, socketId: socket.id})
    });
}