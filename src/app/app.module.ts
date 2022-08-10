import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridAppFruitsComponent } from './components/grid-app-fruits/grid-app-fruits.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GridAppFruitsComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, ReactiveFormsModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
