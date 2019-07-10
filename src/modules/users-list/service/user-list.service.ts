import { User } from 'src/interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserListService {
    private userListSubject$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    public userList$: Observable<User[]> = this.userListSubject$.asObservable();

    private pageCountSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(12);
    public pageCount$: Observable<number> = this.pageCountSubject$.asObservable();

    public setUsers(users: User[]): void {
        this.userListSubject$.next(users);
    }

    public setPageCount(pageCount: number): void {
        this.pageCountSubject$.next(pageCount);
    }
}
