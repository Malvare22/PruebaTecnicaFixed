import { createContext } from "react";
import { Product } from "../adapters/Product";

export const ProductDetailContext = createContext<Product | null>(null);