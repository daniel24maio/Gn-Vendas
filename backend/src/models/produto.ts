import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('produtos')
export default class Produto{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;
    
    @Column()
    preco: number;

}