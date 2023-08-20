
import { inject } from "@angular/core";
import { User } from '../models/user';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { UserTrackerError } from '../models/userTrackerError';
import { RegisterService } from "../services/register.service";;
import { catchError } from "rxjs/operators";
/*
export const UserResolver: ResolveFn <User | UserTrackerError> = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
  dataService:RegisterService = inject(RegisterService)
  ):Observable <User | UserTrackerError> => dataService.addUser(
    route.params['username'],
    route.params['password']
    ).pipe( 
    catchError(err => of(err))
  )

*/