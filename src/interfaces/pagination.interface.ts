import { User } from './user.interface';

export interface Pagination {
    total_pages: number;
    per_page: number;
    total: number;
    page: number;
    data: User[];
}
