import { HttpClient, HttpContext, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map,of,tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { CONTENT_TYPE } from '../interceptors/add-header.interceptor';
import { UserTrackerError } from '../models/userTrackerError';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  root: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  addUser(email: string, pwd: string): Observable<User | UserTrackerError> {
    let body = new HttpParams();
    const url=this.root.concat('register');
   // console.log ('Url',`http://localhost:3000/api/register?username=${email}&password=${pwd}`)
    return this.http.get<User>(`http://localhost:3000/api/xregister?username=${email}&password=${pwd}`, {
      context: new HttpContext().set(CONTENT_TYPE, 'application/json'),
    }).pipe(
catchError(error => of(error))
    )
  }

  private handleHttpError(error: HttpErrorResponse): Observable<UserTrackerError> {
    const dataError = new UserTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrivieng all books';
    return throwError(() => dataError);

  }

}
