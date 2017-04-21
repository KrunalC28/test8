import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private url:string = "http://localhost:5000/users/";

    constructor(private http: Http) { }
    
    getAllusers(){
        return this.http.get(this.url)
            .map((response:Response) => response.json());
    }

    getUser(username:any){
        return this.http.get(this.url+username)
            .map((response:Response) => response.json());
    }
}