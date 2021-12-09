import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/form'},
  {path: 'form', component: FormComponent },
  {path: 'login', component: LogInComponent },
  {path: '**', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
