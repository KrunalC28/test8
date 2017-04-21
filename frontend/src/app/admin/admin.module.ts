import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { NewUserComponent } from './newUser.component';
import { UserDetailsComponent } from './userdetails.component';
import { NewTrainingComponent } from './newTraining.component';
import { TrainingDetailsComponent } from './trainingDetail.component';

@NgModule({
    exports: [],
    declarations: [AdminComponent,
                   NewUserComponent,
                   UserDetailsComponent,
                   NewTrainingComponent,
                   TrainingDetailsComponent]
})
export class AdminModule { }
