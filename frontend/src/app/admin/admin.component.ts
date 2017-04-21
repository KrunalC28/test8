import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NewUserComponent }   from './newUser.component';
import { UserDetailsComponent } from './userdetails.component';
import { User } from '../shared/user';
import { Training } from '../shared/training';
import { AdminService } from './admin.service';

@Component({
  selector:'test',
  templateUrl:'./admin.component.html',
  styleUrls:['./admin.component.css'] 
})

export class AdminComponent implements OnInit{

  firstname:string;
  users:User[] = [];
  trainings:Training[] = [];
  constructor(private router:Router,private adminService: AdminService){}

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit(){
    this.firstname = localStorage.getItem("firstname");
    
    this.adminService.getAllUsers().subscribe(
      (data) => { this.users = data },
      (err) => console.log(err)
    );

    this.adminService.getAllTrainings().subscribe(
      (data) => { this.trainings = data },
      (err) => console.log(err)
    );

  }
}