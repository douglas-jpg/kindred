import { Repository } from '../repository/repository.js';

export class Service {
    constructor() {
        this.repository = new Repository();
    }

    async getAllComments() {
        try {
            return await this.repository.findAll();
        } catch (error) {
            throw new Error(`Erro ao buscar comentários: ${error}`);
        }
    }

    async createComment(data) {
        if (!data || typeof data !== 'object') {
            throw new Error(
                'Dados do comentário devem ser fornecidos em um objeto.'
            );
        }

        const { author, text } = data;

        if (!author || typeof author !== 'string') {
            throw new Error(
                'Campo "usuario" é obrigatório e deve ser uma string.'
            );
        }
        if (!text || typeof text !== 'string') {
            throw new Error(
                'Campo "texto" é obrigatório e deve ser uma string.'
            );
        }

        const comment = {
            author,
            text,
            like: 0,
            deslike: 0,
        };

        try {
            const newComment = await this.repository.create(comment);
            return newComment;
        } catch (error) {
            throw new Error(`Erro ao criar comentário: ${error}`);
        }
    }

    async reactToComment(id, type) {
        if (!id || typeof id !== 'number') {
            throw new Error('ID do comentário inválido');
        }

        if (!['like', 'deslike'].includes(type)) {
            throw new Error('Tipo de reação inválido');
        }

        try {
            const updateComment = await this.repository.updateReaction(
                id,
                type
            );

            return updateComment;
        } catch (error) {
            throw new Error(`Erro ao atualizar reação: ${error.message}`);
        }
    }
}
