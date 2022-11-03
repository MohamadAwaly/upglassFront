//module
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';

//components
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';

//Routes
import {APP_ROUTES} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
