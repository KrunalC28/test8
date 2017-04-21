import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../shared/user';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent {

  user: User = { username: '', firstname: '', lastname: '', password: '', role: '' };
  username: string = '';
  firstname: string = '';
  errormsg: string = '';

  constructor(private loginService: LoginService,
    private router: Router) { }

  login() {
    if (this.user.username === '') {
      this.errormsg = 'Username is Required';
      return;
    } else if (this.user.password === '') {
      this.errormsg = 'Password is Required';
      return;
    }
    this.loginService.login(this.user).subscribe(
      (data) => {
        if (data != null) {
          this.username = data.username;
          this.firstname = data.firstname;
          localStorage.setItem("username", this.username);
          localStorage.setItem("firstname", this.firstname);
          if (data.role == 'admin')
            this.router.navigate(['/admin']);

          if (data.role === 'trainer')
            this.router.navigate(['/trainer']);

          if (data.role === 'trainee')
            this.router.navigate(['/trainee']);
        }
        else {
          this.errormsg = "Username and Password does not match";
          this.router.navigate(['/login']);
        }
      },
      (err) => this.errormsg = "Username or Password does not match"
    );
  }

}