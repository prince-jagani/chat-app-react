import express from 'express';
import { createServer } from 'http';
import { config as dotenvConfig} from 'dotenv';
import { Server } from 'socket.io';

// Express App & dotenv configs //
const expressApp = express()
dotenvConfig();

// SERVER //
const server = createServer(expressApp);

// WebSocket IO App //
const wsIO = new Server(server); 


server.listen(process.env.PORT, () => console.log(`Example app listening on port ${8080}!`))


export { wsIO };