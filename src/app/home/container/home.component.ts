import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@core/services/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.currentUser;
  }
}
