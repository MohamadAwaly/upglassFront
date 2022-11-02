//module
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NgModule} from '@angular/core';

//components
import {CocktailDetailsComponent} from "./cocktail-container/cocktail-details/cocktail-details.component";
import {IngredientListComponent} from './panier-container/ingredient-list/ingredient-list.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import {CocktailListComponent} from './cocktail-container/cocktail-list/cocktail-list.component';
import {CocktailContainerComponent} from './cocktail-container/cocktail-container.component';
import {PanierContainerComponent} from './panier-container/panier-container.component';
import {SelectedDirective} from './shared/directives/selected.directive';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';

//Routes
import {APP_ROUTES} from "./app.routes";

//Pipe
import { FilterPipe } from './shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
