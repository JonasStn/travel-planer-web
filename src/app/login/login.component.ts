import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@core/services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.logout();
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.userService.login(username, password).subscribe({
      next: () => this.router.navigate(['home']),
      error: err => alert('Login failed ' + err)
    });
  }
}
