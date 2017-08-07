import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './Calculator/calculator.component';

// Route Configuration
export const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'home', component: AppComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);