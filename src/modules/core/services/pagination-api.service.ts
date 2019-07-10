import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pagination } from 'src/interfaces/pagination.interface';

@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(page: number = 1): Observable<Pagination> {
    return this.http.get<Pagination>(`https://reqres.in/api/users?page=${page}`)
      .pipe(map(response => {
        return {
          total_pages: response.total_pages,
          per_page: response.per_page,
          total: response.total,
          page: response.page,
          data: response.data,
        };
    }));
  }
}
