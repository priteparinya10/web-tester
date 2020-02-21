
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component'

import { MatSliderModule } from '@angular/material/slider';
import { JobComponent } from './component/job/job.component';
import {MatSelectModule} from '@angular/material/select';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSliderModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
