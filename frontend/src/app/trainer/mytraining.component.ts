import { Component, OnInit } from '@angular/core';
import { TrainerService } from './trainer.service';
import { Training } from '../shared/training';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'my-training',
    templateUrl: 'mytraining.component.html'
})

export class MyTrainingComponent implements OnInit {

    trainings: Training[];
    username: string;
    scenarios:string='';

    constructor(private trainerService: TrainerService) { }

    ngOnInit() {
        this.username = localStorage.getItem("username");
        this.getMyTrainings();
    }

    getMyTrainings() {
        this.trainerService.getMyTrainings(this.username).subscribe(
            (data) => { this.trainings = data },
            (err) => console.log(err)
        );
    }

    search(text: string) {
        //console.log('search string '+searchText);
        let searchTraining = {
            searchText:text,
            username:this.username
        }
        this.trainerService.search(searchTraining).subscribe(
            (data) => { this.trainings = data },
            (err) => console.log(err)
        );
    }

    saveEditable(scenario:string){
        console.log('reaching here');
    }   
}