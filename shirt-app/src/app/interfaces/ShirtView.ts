import { Shirt } from "../classes/shirt";

export interface ShirtView {
    shirtInfo: string,
    Shirts: {
        [key: number]: Shirt
    };
}