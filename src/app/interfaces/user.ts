import { Restaurant } from "./Restaurant";

export interface user {
    id: number;
    username: string;
    email: string;
    password: string;
    created_at: string;
    favorite:Restaurant[] 
}