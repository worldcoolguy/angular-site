import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Activity } from './activity';
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

@Injectable()
export class RunningService {

  private endpoint_url:string = environment.activityEndpoint;
  constructor (private http: Http) {}

  public getActivities(): Observable<Activity[]> {
    return this.http.get(this.endpoint_url).map(res => res.json() as Activity[]);
  }

}
