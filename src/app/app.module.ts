import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AwesomeAppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { AboutComponent } from './components/about/about.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MainComponent } from './components/main/main.component';
import { ColorDirective } from './directives/color.directive';
import { SearchPipe } from './components/main/search.pipe';
import { ListComponent } from './components/list/list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AwesomeAppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ToolBarComponent,
    MainComponent,
    ColorDirective,
    SearchPipe,
    ListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
