import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TrainerService {
    private url:string = "http://localhost:5000/trainer/";
    constructor(private http: Http) { }

    getMyTrainings(name:string){
        return this.http.get(this.url+name)
            .map((response:Response) => response.json());
    } 

    search(searchText:any){
        let body = JSON.stringify(status);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'searchTrainings/',searchText)
            .map((response:Response) => response.json());
    }

    getTraining(id:number){
        console.log('id:'+id);
        return this.http.get(this.url+'trainings/'+id)
            .map((response:Response) => response.json());
    }
    
    addScenario(sc:any){
        let body = JSON.stringify(sc);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'addScenario/',sc)
            .map((response:Response) => response.json());
    }

    getScenarios(id:number){
        return this.http.get(this.url+'scenarios/'+id)
            .map((response:Response) => response.json());
    }

    getCoveredScenarios(id:number){
        console.log('CS: '+id);
        return this.http.get(this.url+'cscenarios/'+id)
            .map((response:Response) => response.json());
    }

    getNotCoveredScenarios(id:number){
         console.log('NCS: '+id);
        return this.http.get(this.url+'ncscenarios/'+id)
            .map((response:Response) => response.json());
    }

    completeTraining(id:number){
        console.log('Training has to Complete');
        let tr = {
            id:id
        }
        console.log('id:'+tr.id);
        let body = JSON.stringify(tr);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'completeTraining/',tr)
            .map((response:Response) => response.json());
    }

    completeScenario(sc:any){
        console.log('id:'+sc.id);
        let body = JSON.stringify(sc);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'completeScenario/',sc)
            .map((response:Response) => response.json());
    }  
}