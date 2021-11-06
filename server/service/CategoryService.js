import CategoryModel from '../models/CategoryModel.js';
class CategoryService {
    async create(category) {
        const createCategory = await CategoryModel.create(category);
        return createCategory;
    };
    async getAll() {
        const categorys = await CategoryModel.find();
        return categorys;
    };
    async getOne(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const category = await CategoryModel.findById(id);
        return category;
    };
    async update(category) {
        if(!category._id) {
            throw new Error('ID не вказано!');
        };
        const updateCategory = await CategoryModel.findByIdAndUpdate(category._id, category, {new: true});
        return updateCategory;
    };
    async delete(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const category = await CategoryModel.findByIdAndDelete(id);
        return category;
    };
}

export default new CategoryService();