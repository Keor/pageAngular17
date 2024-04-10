export interface AllProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
}

export enum Category {
    Electronics = "electronics",
    Jeweley = "jewelery",
    MenSClothing = "men's clothing",
    WomanSClothing = "woman's clothing"
}

export interface Rating {
    rate: number;
    count: number;
}