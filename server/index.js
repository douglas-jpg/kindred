import { startServer } from './src/server.js';

try {
    startServer();
} catch (error) {
    console.error(error.message);
}
