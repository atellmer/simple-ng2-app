import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './components/hello/hello.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'main', component: MainComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AwesomeAppRoutingModule { }
