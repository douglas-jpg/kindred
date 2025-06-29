import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/comments', routes);

app.get('/', (req, res) => {
    res.send('API de Comentários');
});

export function startServer() {
    try {
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        throw new Error(`Erro ao iniciar o servidor: ${error.message}`);
    }
}
