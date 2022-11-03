//module
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';

//components
import {SelectedDirective} from './shared/directives/selected.directive';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';

//Routes
import {APP_ROUTES} from "./app.routes";

import {CocktailModule} from "./features/cocktail/cocktail.module";
import {PanierModule} from "./features/panier/panier.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDirective,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    CocktailModule,
    PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
