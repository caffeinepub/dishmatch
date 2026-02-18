import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Restaurant {
    neighborhood: Neighborhood;
    mode: Mode;
    name: string;
    priceRange: string;
    details: string;
    category: Category;
    rating: number;
}
export enum Category {
    Bar = "Bar",
    Sushi = "Sushi",
    Yakiniku = "Yakiniku",
    Steakhouse = "Steakhouse",
    Japanese = "Japanese",
    Chinese = "Chinese",
    Mexican = "Mexican",
    Italian = "Italian",
    Fusion = "Fusion",
    Kaiseki = "Kaiseki",
    Vegan = "Vegan",
    French = "French",
    Casual = "Casual"
}
export enum Mode {
    Date_ = "Date",
    Business = "Business"
}
export enum Neighborhood {
    Shinjuku = "Shinjuku",
    Nihonbashi = "Nihonbashi",
    Ginza = "Ginza",
    Aoyama = "Aoyama",
    TokyoStation = "TokyoStation",
    Akasaka = "Akasaka",
    Asakusa = "Asakusa",
    Atago = "Atago",
    Shibuya = "Shibuya",
    Roppongi = "Roppongi"
}
export interface backendInterface {
    getAllRestaurants(): Promise<Array<Restaurant>>;
    getByCategory(category: Category): Promise<Array<Restaurant>>;
    getByMode(mode: Mode): Promise<Array<Restaurant>>;
    getByName(name: string): Promise<Restaurant | null>;
    getByNeighborhood(neighborhood: Neighborhood): Promise<Array<Restaurant>>;
}
