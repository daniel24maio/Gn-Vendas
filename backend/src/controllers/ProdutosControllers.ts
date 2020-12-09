import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Produto from '../models/produto';

export default {
    async index(request: Request, response: Response){
        const ProdutoRespository = getRepository(Produto);

        const produtos = await ProdutoRespository.find();

        return response.json(produtos);
    },


    async create(request: Request, response: Response){

        const{
            nome,
            preco
        } = request.body;
    
        const ProdutoRespository = getRepository(Produto);
        
        const produto = ProdutoRespository.create({
            nome,
            preco,
        });
    
        await ProdutoRespository.save(produto);
        
        return response.status(201).json(produto);
    }




};