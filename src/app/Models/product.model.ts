
export interface Product{
    id:string;
    collectionId:string;
    name: string;
    price: number;
    availableSizes: string[];
    availableQuantaties: number;
    description: string;
    images: string[];
}