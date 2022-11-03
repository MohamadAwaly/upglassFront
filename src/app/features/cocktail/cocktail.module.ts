import {NgModule} from '@angular/core';
import {CocktailListComponent} from "./cocktail-container/cocktail-list/cocktail-list.component";
import {CocktailDetailsComponent} from "./cocktail-container/cocktail-details/cocktail-details.component";
import {CocktailContainerComponent} from "./cocktail-container/cocktail-container.component";
import {CocktailFormComponent} from "./cocktail-container/cocktail-form/cocktail-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {COKTAIL_ROUTE} from "./cocktail.routes";
import {SharedModule} from "../../shared/modules/shared.module";


@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
  ],
  imports: [
    ReactiveFormsModule, FormsModule,RouterModule.forChild(COKTAIL_ROUTE), SharedModule
  ]
})
export class CocktailModule {
}
