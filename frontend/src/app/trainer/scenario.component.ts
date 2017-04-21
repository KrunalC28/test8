import { Component, OnInit, Input } from '@angular/core';
import { TrainerService } from './trainer.service';
import { Training } from '../shared/training';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'scenario',
    templateUrl: './scenario.component.html',
    styleUrls: ['./scenario.component.css']
})

export class ScenarioComponent implements OnInit {
    training: Training = { id: 0, title: '', department: '', taudience: '', trainer: '', date: '', starttime: '', endtime: '', location: '', isStart: '', isComplete: '' };
    scenarios: any[] = [];
    firstname: string = '';

    constructor(private trainerService: TrainerService,
        private route: ActivatedRoute,
        private location: Location) { }

    complete(id: number) {
        let sc = {
            id: id
        }
        this.trainerService.completeScenario(sc).subscribe();
    }

    back() {
        this.location.back();
    }

    completeTraining() {
        this.route.params
            .switchMap((params: Params) => this.trainerService.completeTraining(+params['id']))
            .subscribe(
            (data) => {},
            (err) => console.log(err));
    }

    ngOnInit() {
        this.firstname = localStorage.getItem('firstname');
        this.completeTraining();
        this.route.params
            .switchMap((params: Params) => this.trainerService.getScenarios(+params['id']))
            .subscribe(
            (data) => {
                this.scenarios = data;
                console.log(this.scenarios);
            },
            (err) => console.log(err));
    }
}