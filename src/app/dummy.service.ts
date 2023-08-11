import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
@Injectable({
  providedIn: 'root'
})
export class DummyService {
  service1!: String;
  constructor() { }



  testService1():Observable<any>{
    return of('AAA');
  }
}
