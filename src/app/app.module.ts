import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeePerfectPageComponent } from './coffee-perfect-page/coffee-perfect-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeePerfectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
