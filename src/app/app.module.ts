import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
         ResidencesComponent,
         ResidenceDetailComponent,
         HomeComponent,
         NotFoundComponent,
         ResidenceFormComponent,
         AddApartmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
