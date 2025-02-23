import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"}, //default route
  {path:"home",component:HomeComponent},
 { path:"residences",component:ResidencesComponent},
 {path:"addresidence",component:ResidenceFormComponent},
 {path:"addappartement",component:AddApartmentComponent},
 { path :"home/:id", component: ResidenceDetailComponent},
 { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
