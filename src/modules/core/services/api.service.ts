import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/interfaces/user.interface';
import { PaginationApiService } from './pagination-api.service';
import { Pagination } from 'src/interfaces/pagination.interface';

type CachedInfo = {
  [key: number]: Pagination
};

@Injectable()
export class ApiService {
  private cachedResult: CachedInfo = {};

  constructor(
    private http: HttpClient,
    private paginationApiService: PaginationApiService,
  ) { }

  fetchUsers(page): Observable<User[]> {
    if (this.cachedResult[page]) {
      return of(this.cachedResult[page].data);
    }

    return this.http.get<Pagination>('https://reqres.in/api/users?page=' + page)
      .pipe(
        tap(response => this.cachedResult[page] = response),
        map(response => response.data),
      );
  }

  fetchPaginationInfo(page: number = 1): Observable<Pagination> {
    if (this.cachedResult[page]) {
      return of(this.cachedResult[page]);
    }

    return this.paginationApiService.fetchPaginationInfo(page)
      .pipe(
        tap(response => this.cachedResult[page] = response),
      );
  }

  fetchUserById(id: number): Observable<User> {
    return this.http.get<User>(`https://reqres.in/api/users/${id}`)
      .pipe(map(response => response));
  }

}
