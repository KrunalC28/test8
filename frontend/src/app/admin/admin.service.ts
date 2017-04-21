import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../shared/user';
import { Training } from '../shared/training';

@Injectable()
export class AdminService {
    
    private url:string = "http://localhost:5000/admin/";
    
    constructor(private http: Http) { }

    register(user:User){
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'addUser',user)
            .map((response:Response) => response.json());
    }

    getAllUsers(){
        return this.http.get(this.url+'users')
            .map((response:Response) => response.json());
    }

    getAllTrainings(){
        return this.http.get(this.url+'trainings')
            .map((response:Response) => response.json());
    }

    search(searchText:string){
        return this.http.get(this.url+'users/'+searchText)
            .map((response:Response) => response.json());
    }

    searchTraining(searchText:string){
        return this.http.get(this.url+'trainings/'+searchText)
            .map((response:Response) => response.json());
    }

    updateRole(role:any){
        let body = JSON.stringify(role);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'updateRole',role)
            .map((response:Response) => response.json());
    }

    updateStatus(status:any){
        let body = JSON.stringify(status);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'updateStatus',status)
            .map((response:Response) => response.json());
    }

    addTraining(training:Training){
        let body = JSON.stringify(training);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'addTraining',training)
            .map((response:Response) => response.json());
    }
}