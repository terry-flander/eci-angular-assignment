import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './Calculator/calculator.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [NoopAnimationsModule],
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
