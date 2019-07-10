import { Injectable } from '@angular/core';
import { ApiService } from 'src/modules/core/services/api.service';
import { Pagination } from 'src/interfaces/pagination.interface';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRoute } from '@angular/router';
import { UserListService } from '../service/user-list.service';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';

@Injectable()
export class PaginationResolver implements Resolve<void> {
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private userListService: UserListService,
  ) {}

  resolve(): void {
    this.route.queryParams
      .pipe(
        distinctUntilChanged(),
        map(params => params['page'] || 1),
        tap((page) => {
          this.apiService.fetchPaginationInfo(page)
            .pipe(
              tap(paginationData => {
                this.userListService.setUsers(paginationData.data);
                this.userListService.setPageCount(paginationData.total);
              }),
            )
            .subscribe();
        }),
      )
      .subscribe();
  }

}
