import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { map } from 'rxjs/operators';
import { Personal } from '../models/personal.model';

@Injectable()
export class PersonalService {

  constructor(private _http: HttpClient) { }
  private dataModelSource = new BehaviorSubject<Personal>(new Personal());
  currentDataModel = this.dataModelSource.asObservable();

  public getResult(): Observable<Array<Personal>> {
    return this._http.get<any[]>('/api/personal').pipe(
      map(response => {
          console.log('response', response);
        return response.map(e => new Personal(e));
      }));
  }
 /* public getStudent(id: number): Observable<Student> {
    return this._http.get<any>('/api/student/' + id).pipe(
      map(response => {
        return response;
      }));
  }

  public addStudent(student: Student): Observable<number> {
    if (student.id > 0) {
      return this._http.put('/api/student', student).pipe(
        map(response => {
          return student.id;
        }));
    } else {
      return this._http.post<number>('/api/student', student);
    }
  }

  public changeStudent(student: Student): Observable<number> {
    return this._http.put('/api/student', student).pipe(
      map(response => {
        return student.id;
      }));
  }
  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  public  deleteStudent(id: number): Observable<boolean> {
    return this._http.delete<boolean>('/api/student/' + id);
  }*/
}
