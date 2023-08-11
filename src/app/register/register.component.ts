import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    this.httpService.testHttpService().subscribe((data: any) => {
      console.log(data);
    } );
  }

   constructor(private httpService: HttpService){}

  log(email: any,pwd1:any, pwd2:any):void {
    console.log(email,pwd1,pwd2);
   } 
}
