import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../shared/user';
import { AdminService } from './admin.service';

@Component({
  selector: 'user-details',
  templateUrl: './userdetails.component.html'
})

export class UserDetailsComponent implements OnInit {
  @Input() users: User[];

  constructor(private adminService: AdminService) { 
      this.getAllUsers();
   }
  
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(
      (data) => { this.users = data },
      (err) => console.log(err)
    );
  }

  search(searchText: string) {
    //console.log('search string '+searchText);
    this.adminService.search(searchText).subscribe(
      (data) => { this.users = data },
      (err) => console.log(err)
    );
  }

  update(role:string,id:string) {
    let updateRole={
      'role':role,
      'id':id
    };

    this.adminService.updateRole(updateRole).subscribe(
      (data) => {
          this.users = data 
        },
      (err) => console.log(err),
      () => this.getAllUsers()
    );

  }

  updateStatus(status:string,id:string){
    
    let updateStatus={
      'status':status,
      'id':id
    };
    
    if(status==='active')
      updateStatus.status='inactive';
    else 
      updateStatus.status='active';

    this.adminService.updateStatus(updateStatus).subscribe(
      
      (data) => { this.users = data },
      (err) => console.log(err),
      () => this.getAllUsers()
    );
  }

}