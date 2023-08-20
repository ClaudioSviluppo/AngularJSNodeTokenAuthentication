import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';

//Setto il content type di default
export const CONTENT_TYPE = new HttpContextToken(()=> 'application/json' );

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`AddHeaderInterceptor - ${request.url} ${request.context.get(CONTENT_TYPE)}`);
        //Qui posso modificare la request, ma siccome è immutable, prima la clono
        //Settando l'headers così, qualsiasi tipo di 
        //richiesta avrà un content type application/json senza dover riscriverlo
        const jsonReq: HttpRequest<any>= request.clone({
            setHeaders: { 'Content-Type':request.context.get(CONTENT_TYPE)} 
        });
    return next.handle(request);
  }
}
