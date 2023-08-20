import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
//import { UserResolver } from './resolvers/user-resolver.resolver';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  /*
  { path:'register/:user/:pwd',component:RegisterComponent, 
    resolve:{data:UserResolver},
    data:{resolvedata: 'resolvedUser'}
  },
  */
  { path:'register/:user/:pwd',component:RegisterComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
