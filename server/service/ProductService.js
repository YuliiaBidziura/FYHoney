import ProductModel from "../models/ProductModel.js";
import FileService from "../FileService.js";
class ProductService {
    async create(product, picture) {
        const fileName = FileService.saveFile(picture);
        const createdProduct = await ProductModel.create({...product, picture: fileName});
        return createdProduct;
    };
    async getAll(typeId, categoryId) {
        if(!typeId && !categoryId) {
            const products = await ProductModel.find();
            return products;
        }
        if(typeId && !categoryId) {
            const products = await ProductModel.find({typeId: `${typeId}`});
            return products;
        }
        if(!typeId && categoryId) {
            const products = await ProductModel.find({categoryId: `${categoryId}`});
            return products;
        }
        if(typeId && categoryId) {
            const products = await ProductModel.find({typeId: `${typeId}`, categoryId: `${categoryId}`});
            return products;
        }
    };
    async getOne(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const product = await ProductModel.findById(id);
        return product;
    };
    async update(product) {
        if(!product._id) {
            throw new Error('ID не вказано!');
        };
        const updateProduct = await ProductModel.findByIdAndUpdate(product._id, product, {new: true});
        return updateProduct;
    };
    async delete(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const product = await ProductModel.findByIdAndDelete(id);
        return product;
    };
};

export default new ProductService();