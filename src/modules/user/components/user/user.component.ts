import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/interfaces/user.interface';
import { ApiService } from 'src/modules/core/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit(): void {
    const userId: number = this.activatedRoute.snapshot.params['id'];

    this.apiService.fetchUserById(userId)
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  public back(): void {
    this.router.navigate(['./users']);
  }
}
