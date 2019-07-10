import { Component, Input, OnInit, Optional } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
  @Input() public user: { data: User };

  constructor(@Optional() private parent: UserComponent) { }
}
