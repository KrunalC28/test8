import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Training } from '../shared/training';
import { AdminService } from './admin.service';

@Component({
  moduleId: module.id,
  selector: 'new-training',
  templateUrl: 'newTraining.component.html'
})

export class NewTrainingComponent implements OnInit {

  trainingForm: FormGroup;
  training: Training = { id: 0, title: '', department: '', taudience: '', trainer: '', date: '', starttime: '', endtime: '', location: '', isStart: '', isComplete: '' };

  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit(): void {
    this.trainingForm = this.fb.group({
      title: ['', Validators.required],
      department: ['', Validators.required],
      taudience: ['', Validators.required],
      trainer: ['', Validators.required],
      date: ['', Validators.required],
      starttime: ['', Validators.required],
      endtime: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  register() {
    let t = Object.assign({}, this.training, this.trainingForm.value);
    this.adminService.addTraining(t).subscribe(
      (data) => {
        if (data != null) {
          this.trainingForm.reset();
          alert('Training added Successfully')
        }
        else {
          console.log('Error ');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}