import { User } from './user.interface';
import { Pagination } from './pagination.interface';

export interface UserListResolveData {
    users: User[];
    paginationInfo: Pagination;
}
