import { Product } from "../adapters/Product";
import { getRealValue } from "./getRealValue";
import getScore from "./getScore";

export const sorters = [
    (a: Product, b:Product) => getScore(b.reviews) - getScore(a.reviews),
    (a: Product, b:Product) => getScore(a.reviews) - getScore(b.reviews),
    (a: Product, b:Product) => getRealValue(b) - getRealValue(a),
    (a: Product, b:Product) => getRealValue(a) - getRealValue(b),
]