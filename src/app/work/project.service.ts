import { Injectable} from "@angular/core"
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Project } from './project';
import 'rxjs/Rx';


@Injectable()
export class ProjectService {

  private endpoint_url:string = "http://localhost:3004/projects";

  constructor (private http: Http) {}

  getProjects(): Observable<Project> {
    return this.http.get(this.endpoint_url).map(res => res.json() as Project);
  }

  /*getProject(key): Project {
    return Observable.create(observer => {
        observer.next(this.getProjects().find((project) => project.key == key));
        observer.complete();
    });
  }*/
}
