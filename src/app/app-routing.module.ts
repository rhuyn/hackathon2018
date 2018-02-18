import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: MapComponent},
  { path: 'map', component: MapComponent},
  { path: 'about', component: AboutComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}

