import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetRoutes} from './routes/routes'

const getRoutes =  new GetRoutes();

const routes: Routes = getRoutes.getAppRoute();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
