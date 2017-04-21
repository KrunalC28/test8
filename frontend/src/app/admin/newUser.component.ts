import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../shared/user';
import { AdminService } from './admin.service';

@Component({
  selector: 'my-signup',
  templateUrl: './newUser.component.html'
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  user: User = { username: '', firstname: '', lastname: '', password: '', role: '', isActive: '' };
  msg: string = '';
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }

  save() {
    console.log(this.userForm);
  }

  register() {
    let u = Object.assign({}, this.user, this.userForm.value);
    this.adminService.register(u).subscribe(
      (data) => {
        if (data.hasOwnProperty('errno')) {
          if (data.errno === 1062) {
            alert("Username already Exists. Choose different Username");
          }
          else {
            console.log(data);
          }
        } else {
          this.userForm.reset();
          alert("User added Successfully");
        }

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
