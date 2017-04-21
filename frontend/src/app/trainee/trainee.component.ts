import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector:'test',
  templateUrl:'./trainee.component.html',
  styleUrls:['./trainee.component.css']
})

export class TraineeComponent implements OnInit{

  firstname:string;

  constructor(private router:Router){}

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit(){
    this.firstname = localStorage.getItem("firstname");
  }
}