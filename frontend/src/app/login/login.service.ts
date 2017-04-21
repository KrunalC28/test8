import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User }       from '../shared/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    private url:string = "http://localhost:5000/users/";

    constructor(private http: Http) { }

    login(user:User){
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url,body,options)
            .map((response:Response) => response.json());
    }
    
}