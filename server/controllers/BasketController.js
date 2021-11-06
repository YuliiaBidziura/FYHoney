import BasketService from '../service/BasketService.js';
class BasketController {
    async create(req, res) {
        try {
            const basket = await BasketService.create(req.body);
            res.json(basket);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async getOne(req, res) {
        try {
            const basket = await BasketService.getOne(req.params.id);
            return res.json(basket);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async update(req, res) {
        try {
            const updateBasket = await BasketService.update(req.body);
            return res.json(updateBasket);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async delete(req, res) {
        try {
            const basket = await BasketService.delete(req.params.id);
            return res.json(basket);
        } catch (e) {
            res.status(500).json(e);
        }
    };
}
export default new BasketController();