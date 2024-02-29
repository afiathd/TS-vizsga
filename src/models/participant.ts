import { Category } from "./category";

export interface Participant{
    id: number;
    name: string;
    category: Category;
    showTime: string;
}