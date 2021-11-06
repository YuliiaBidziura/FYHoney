import TypeService from "../service/TypeService.js";
class TypeController {
    async create(req, res) {
        try {
            const type = await TypeService.create(req.body);
            res.json(type);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async getAll(req, res) {
        try {
            const types = await TypeService.getAll();
            return res.json(types);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async getOne(req, res) {
        try {
            const type = await TypeService.getOne(req.params.id);
            return res.json(type);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async update(req, res) {
        try {
            const updateType = await TypeService.update(req.body);
            return res.json(updateType);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async delete(req, res) {
        try {
            const type = await TypeService.delete(req.params.id);
            return res.json(type);
        } catch (e) {
            res.status(500).json(e);
        }
    };
}
export default new TypeController();