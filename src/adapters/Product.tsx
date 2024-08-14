import React from "react";

export interface Review{
    "reviewer": string,
    "rating": number,
    "comment": string
}

export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    discount: number;
    manufacturer: string;
    weight: string;
    dimensions: string;
    countryOfOrigin: string;
    modelNumber: string;
    color: string;
    material: string;
    numberOfPieces: number;
    specialFeatures: string;
    componentsIncluded: string;
    reviews: Review[];
    img: string[];
    category: string;
    sales: number;
}

export interface DataForContext{
    data : Product[],
    product : Product | null,
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
};