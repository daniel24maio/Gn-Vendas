import { Router } from 'express';
import ProdutosController from './controllers/ProdutosControllers';

const routes = Router();

routes.get('/produtos', ProdutosController.index);

routes.get('/produtos', ProdutosController.index);

routes.post('/produtos', ProdutosController.create);

export default routes;