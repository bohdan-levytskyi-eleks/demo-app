import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChiledComponent } from './components/chiled/chiled.component';
import { HeaderComponent } from './components/header/header.component';
import { LoggerComponent } from './components/logger/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChiledComponent,
    HeaderComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
