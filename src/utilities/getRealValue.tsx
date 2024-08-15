import { Product } from "../adapters/Product";

export const getRealValue = (product: Product) : number => {
    const discountAmount = product.price * (product.discount / 100);
    return Math.ceil(product.price - discountAmount);
};