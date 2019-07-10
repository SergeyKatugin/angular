import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { PaginationResolver } from './resolvers/pagination.resolver';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CoreModule } from '../core/core.module';
import { UserListService } from './service/user-list.service';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule,
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    PaginationResolver,
    UserListService,
  ]
})
export class UsersListModule { }
