import { createContext } from "react";
import { DataForContext } from "../adapters/Product";

export const DataContext = createContext<DataForContext | undefined>(undefined);