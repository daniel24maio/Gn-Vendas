import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCompras1607435796533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(new Table({
         name: 'compras',
         columns: [
             {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
             },
             {
                 name: 'item',
                 type: 'integer',
                 unsigned: true,                 
             },
             {
                 name: 'pdf',
                 type: 'varchar',
                 isNullable: true,                 
             },
             {
                 name: 'idBoleto',
                 type: 'varchar',
                 isNullable: true,                 
             },
             {
                 name: 'data-Compra',
                 type: 'date',                 
             }
         ],
     })) 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compras')        
    }

}
