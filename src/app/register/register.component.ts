import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user!: User;
  ngOnInit(): void {
    this.httpService.testHttpService().subscribe((data: any) => {
      console.log(data);
    } );
  }

   constructor(private httpService: HttpService, private registerService:RegisterService,
    ){}

  register(email: string,pwd:string){
 
    of(this.registerService.addUser(email,pwd).subscribe({
      next: (data:any) => {this.user = data, console.log('data',data)},
      error: (error) => console.log('Errore',error),
      complete: () => console.log('All Done getting User')
    }));
  }

  log(email: any,pwd1:any, pwd2:any):void {
    console.log(email,pwd1,pwd2);
   } 
}
