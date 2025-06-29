import { Service } from '../service/service.js';

export class Controller {
    constructor() {
        this.service = new Service();
    }

    async getComments(req, res) {
        try {
            const comments = await this.service.getAllComments();
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createComment(req, res) {
        try {
            const payload = {
                author: req.body.author,
                text: req.body.text,
            };

            const newComment = await this.service.createComment(payload);
            return res.status(201).json(newComment);
        } catch (error) {
            const isValidationError =
                error.message.includes('Campo') ||
                error.message.includes('Dados');

            const status = isValidationError ? 400 : 500;

            return res.status(status).json({ error: error.message });
        }
    }

    async updateComment(req, res) {
        try {
            const id = Number(req.params.id);
            const type = req.params.type;

            const updatedComment = await this.service.reactToComment(id, type);
            return res.status(200).json(updatedComment);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
