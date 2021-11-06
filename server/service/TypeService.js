import TypeModel from '../models/TypeModel.js';
class TypeService {
    async create(type) {
        const createType = await TypeModel.create(type);
        return createType;
    };
    async getAll() {
        const types = await TypeModel.find();
        return types;
    };
    async getOne(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const type = await TypeModel.findById(id);
        return type;
    };
    async update(type) {
        if(!type._id) {
            throw new Error('ID не вказано!');
        };
        const updateType = await TypeModel.findByIdAndUpdate(type._id, type, {new: true});
        return updateType;
    };
    async delete(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const type = await TypeModel.findByIdAndDelete(id);
        return type;
    };
};

export default new TypeService();