import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector:'test',
  templateUrl:'./trainer.component.html',
  styleUrls:['./trainer.component.css'] 
})

export class TrainerComponent{

  firstname:string;
  constructor(private router:Router){}

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit(){
    this.firstname = localStorage.getItem("firstname");
  }

}