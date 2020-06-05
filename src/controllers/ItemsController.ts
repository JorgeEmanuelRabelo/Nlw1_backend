import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {

    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
        const serializedItems = items.map((item: any) => {
            return {
                id: item.id,
                title: item.name,
                image_url: `http:localhost:3333/uploads/${item.image}`,
                image: item.image
            }
        });
        return res.json(serializedItems);
    }
}

export default new ItemsController();