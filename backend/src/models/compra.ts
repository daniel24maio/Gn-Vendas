import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('compras')
export default class Compra{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    item: number;

    @Column()
    pdf: string;

    @Column()
    idBoleto: string;

    @Column()
    data_compra: Date;    

}