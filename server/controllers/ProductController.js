import ProductService from "../service/ProductService.js";
class ProductController {
    async create(req, res) {
        try {
            const product = await ProductService.create(req.body, req.files.picture);
            res.json({product});
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async getAll(req, res) {
        try {
            const {typeId, categoryId} = req.query;
            const products = await ProductService.getAll(typeId, categoryId);
            return res.json(products)
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async getOne(req, res) {
        try {
            const {id} = req.params
            const product = await ProductService.getOne(id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async update(req, res) {
        try {
            console.log(req.params._id)
            const updateProduct = await ProductService.update(req.body);
            return res.json(updateProduct);
        } catch (e) {
            res.status(500).json(e);
        }
    };
    async delete(req, res) {
        try {
            const product = await ProductService.delete(req.params.id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    };
}
export default new ProductController();