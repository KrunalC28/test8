import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer/trainer.service';
import { Training } from '../shared/training';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'selector-name',
    templateUrl: 'report.component.html'
})

export class ReportComponent implements OnInit {
    training: Training = { id: 0, title: '', department: '', taudience: '', trainer: '', date: '', starttime: '', endtime: '', location: '', isStart: '', isComplete: '' };
    scenarios: any[] = [];
    firstname: string = '';

    constructor(private trainerService: TrainerService,
        private route: ActivatedRoute,
        private location: Location) { }

    getAllScenarios() {
        this.route.params
            .switchMap((params: Params) => this.trainerService.getScenarios(+params['id']))
            .subscribe(
            (data) => {
                this.scenarios = data;
            },
            (err) => console.log(err));

    }

    ngOnInit() {
        this.firstname = localStorage.getItem('firstname');
        this.getAllScenarios();
    }
}