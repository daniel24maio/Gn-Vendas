import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProdutos1607435775644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produtos',
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
                    name: 'nome',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'preco',
                    type: 'decimal',
                    scale: 2,
                    precision: 10,
                    isNullable: false,
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos')
    }

}
