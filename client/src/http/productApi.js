import { $host, $authHost} from "./index.js";

export const createType = async (type) => {
    const {data} = await $authHost.post('/api/types', type);
    return data;
}
export const fetchTypes = async () => {
    const {data} = await $host.get('/api/types');
    return data;
}

export const createCategory = async (category) => {
    const {data} = await $authHost.post('/api/category', category);
    return data;
}
export const fetchCategory = async () => {
    const {data} = await $host.get('/api/category');
    return data;
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('/api/product', product);
    return data;
}
export const fetchProduct = async (typeId, categoryId) => {
    const {data} = await $host.get('/api/product', {params: {typeId, categoryId}});
    return data;
}
export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('/api/product/' + id);
    return data;
}