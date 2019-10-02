import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './component/about/about.component';
import {ContactusComponent} from './component/contactus/contactus.component';
import {DataComponent} from './component/data/data.component';


const routes: Routes = [
  {path : 'about',component:AboutComponent},
  {path : 'contactus', component:ContactusComponent},
  {path : 'data', component:DataComponent},
  {path : '', redirectTo:'/about',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
