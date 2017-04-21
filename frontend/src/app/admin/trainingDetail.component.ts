import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Training } from '../shared/training';
import { AdminService } from './admin.service';

@Component({
    moduleId: module.id,
    selector: 'training-details',
    templateUrl: 'trainingDetail.component.html'
})

export class TrainingDetailsComponent implements OnInit {
    @Input() trainings: Training[];

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings() {
    this.adminService.getAllTrainings().subscribe(
      (data) => { this.trainings = data },
      (err) => console.log(err)
    );
  }

  search(searchText: string) {
    //console.log('search string '+searchText);
    this.adminService.searchTraining(searchText).subscribe(
      (data) => { this.trainings = data },
      (err) => console.log(err)
    );
  } 
}