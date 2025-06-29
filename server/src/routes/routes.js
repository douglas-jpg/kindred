import express from 'express';
import { Controller } from '../controller/controller.js';

const router = express.Router();
const controller = new Controller();

router.get('/', (req, res) => controller.getComments(req, res));
router.post('/', (req, res) => controller.createComment(req, res));
router.patch('/:id/:type', (req, res) => controller.updateComment(req, res));

export default router;
