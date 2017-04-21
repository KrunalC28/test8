import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InlineEditorModule } from 'ng2-inline-editor';
import { DataTableModule } from "angular2-datatable";

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './admin/newUser.component';
import { UserDetailsComponent } from './admin/userdetails.component';
import { NewTrainingComponent } from './admin/newTraining.component';
import { TrainingDetailsComponent } from './admin/trainingDetail.component';
import { LoginComponent } from './login/login.component';
import { TrainerComponent } from './trainer/trainer.component';
import { MyTrainingComponent } from './trainer/mytraining.component';
import { TraineeComponent } from './trainee/trainee.component';
import { FilterTextComponent } from './shared/filter/filter-text.component';
import { TrainingDetailComponent } from './trainer/trainingDetail.component';
import { ScenarioComponent } from './trainer/scenario.component';
import { ReportComponent } from './admin/report.component';

import { DataService } from './shared/data.service';
import { CanActivateAuthGuard } from './can-activate.service';
import { AdminService } from './admin/admin.service';
import { FilterTextService } from './shared/filter/filter-text.service';
import { TrainerService } from './trainer/trainer.service';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTableModule,
    InlineEditorModule,
  ],
  declarations: [AppComponent,
    LoginComponent,
    AdminComponent,
    NewUserComponent,
    UserDetailsComponent,
    NewTrainingComponent,
    TrainingDetailsComponent,
    TrainerComponent,
    MyTrainingComponent,
    TraineeComponent,
    FilterTextComponent,
    TrainingDetailComponent,
    ScenarioComponent, ReportComponent],
  providers: [DataService,
    CanActivateAuthGuard,
    AdminService,
    FilterTextService,
    TrainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
