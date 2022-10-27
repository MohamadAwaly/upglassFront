import {Component, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail";
import {PanierService} from "../../shared/services/panier.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CocktailService} from "../../shared/services/cocktail.service";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail !: Cocktail;

  constructor(private _panierService: PanierService,
              private _activatedRoot: ActivatedRoute,
              private _cocktailService: CocktailService) {
    // this.cocktail = this._cocktailService.getCocktail(+this._activatedRoot.snapshot.paramMap.get('index')!);
  }

  ngOnInit(): void {
    this._activatedRoot.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index')
      if (cocktailIndex) {
        this.cocktail = this._cocktailService.getCocktail(+cocktailIndex)!; //permet de dire qu'on est sur qu'il n'est pas null
      }
    })
  }

  public addToPanier(): void {
    this._panierService.addToPanier(this.cocktail.ingredients);
  }

}
