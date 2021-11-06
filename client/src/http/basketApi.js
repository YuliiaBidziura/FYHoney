import { $host, $authHost} from "./index.js";

export const createBasket = async ({personName, deliveryMethod, paymentMethod, phoneNumber, commentToTheOrder, productName, productImg, productPrice, quantity, totalSum}) => {
    const {data} = await $host.post('api/basket', {personName, deliveryMethod, paymentMethod, phoneNumber, commentToTheOrder, productName, productImg, productPrice, quantity, totalSum})
    return data
}