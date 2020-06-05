import { Request, Response } from 'express';
import knex from '../database/connection';


class PointsController {

    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query;

        const parsedItems = String(items).
            split(',').
            map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'point_items.id', '=', 'points.id')
            .whereIn('point_items.id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        return res.json(points);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const point = await knex('points').where('id', id).first();

        if (!point)
            return res.status(400).json({ message: 'Point not found' });


        const items = await knex('items').
            join('point_items', 'point_items.item_id', '=', 'items.id').
            where('point_items.point_id', id).
            select('items.title');

        return res.json({ point, items });
    }

    async create(req: Request, res: Response) {
        //Descontrução
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body;

        const point = {
            image: 'https://images.unsplash.com/photo-1587613725874-d9a1e8e23f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
        const trx = await knex.transaction();

        // Realiza o insert e retorna o primeiro elemento
        const point_id = (await trx('points').insert(point))[0];

        const points = await trx('point_items').insert(
            items.map((item_id: number) => {
                return {
                    item_id,
                    point_id,
                };
            })
        );

        if (points != null)
            await trx.commit();
        else
            await trx.rollback()

        return res.json({
            id: point_id,
            ...point
        });
    }
}
export default new PointsController();