import { Product } from "../adapters/Product";
import data from './data.json';

export function getProducts(): Product[]{
    return data.products;
};

export function getProductById(id: number): Product | null{

    for (let i = 0; i < getProducts().length; i++) {
        const element = getProducts()[i];
        if(element.id == id) return element;
    }

    return null;
};