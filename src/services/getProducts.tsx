import { Product } from "../adapters/Product";
import data from './data.json';

export function getProducts(): Product[]{
    return data.products;
};
