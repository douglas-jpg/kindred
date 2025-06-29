import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('src/data/db.json');

export class Repository {
    async findAll() {
        try {
            const data = await fs.readFile(dbPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            throw new Error(`Erro ao ler o banco de dados ${error}`);
        }
    }

    async create(comment) {
        try {
            const comments = await this.findAll();

            const newComment = {
                id:
                    comments.length > 0
                        ? comments[comments.length - 1].id + 1
                        : 1,
                ...comment,
            };

            comments.push(newComment);

            await fs.writeFile(
                dbPath,
                JSON.stringify(comments, null, 2),
                'utf8'
            );

            return newComment;
        } catch (error) {
            throw new Error(`Erro ao salvar comentário: ${error}`);
        }
    }

    async updateReaction(id, type) {
        try {
            const comments = await this.findAll();
            const index = comments.findIndex((c) => c.id === id);

            if (index === -1) {
                throw new Error('Comentário não encontrado');
            }

            if (type === 'like') {
                comments[index].like++;
            } else if (type === 'deslike') {
                comments[index].deslike++;
            } else {
                throw new Error('Tipo de reação inválido');
            }

            await fs.writeFile(
                dbPath,
                JSON.stringify(comments, null, 2),
                'utf8'
            );
            return comments[index];
        } catch (error) {
            throw new Error(`Erro ao reagir o comentario: ${error}`);
        }
    }
}
