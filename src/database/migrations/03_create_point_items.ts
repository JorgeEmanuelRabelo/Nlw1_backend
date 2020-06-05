import Knex from "knex";

// Criar tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('poits');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

//Rolback
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}