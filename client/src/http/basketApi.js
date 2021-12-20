import { $host, $authHost} from "./index.js";
export const createBasket = async (basket) => {
    const {data} = await $authHost.post('/api/basket', basket);
    return data;
}