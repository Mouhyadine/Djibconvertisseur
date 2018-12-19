import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistancesComponent } from './distances/distances.component';
import { PoidsComponent } from './poids/poids.component';
import {TemperatureComponent} from './temperature/temperature.component'

const routes: Routes = [
  { path: 'distance', component: DistancesComponent },
  { path: 'poids', component: PoidsComponent },
  { path: 'temperature', component: TemperatureComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
