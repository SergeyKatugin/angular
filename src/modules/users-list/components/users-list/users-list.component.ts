import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { DisplayedColumnsConstant } from '../../constants/displayed-columns.constant';
import { User } from 'src/interfaces/user.interface';
import { Subject, Observable } from 'rxjs';
import { UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  public displayedColumns = [
    DisplayedColumnsConstant.FirstName,
    DisplayedColumnsConstant.LastName,
    DisplayedColumnsConstant.Email
  ];
  public userList: Observable<User[]> = this.userListService.userList$;
  public pagesCount: Observable<number> = this.userListService.pageCount$;

  private destroyed$: Subject<void> = new Subject<void>();

  constructor(private router: Router,
              private userListService: UserListService,
  ) {
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;

    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: User): void {
    this.router.navigate(['./user', user.id]);
  }
}
