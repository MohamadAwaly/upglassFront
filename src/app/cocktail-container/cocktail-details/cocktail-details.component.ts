import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail";
import {PanierService} from "../../shared/services/panier.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CocktailService} from "../../shared/services/cocktail.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {

  public cocktail !: Cocktail;
  public subscribtion : Subscription = new Subscription();

  constructor(private _panierService: PanierService,
              private _activatedRoot: ActivatedRoute,
              private _cocktailService: CocktailService) {
    // this.cocktail = this._cocktailService.getCocktail(+this._activatedRoot.snapshot.paramMap.get('index')!);
  }

  ngOnInit(): void {
    this._activatedRoot.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.subscribtion) {
        this.subscribtion.unsubscribe();
      }

      const cocktailIndex = paramMap.get('index')
      if (cocktailIndex) {
        this.subscribtion = this._cocktailService.getCocktail(+cocktailIndex).subscribe((cocktail: Cocktail) =>
          this.cocktail = cocktail);
      }
    });
  }

  public addToPanier(): void {
    this._panierService.addToPanier(this.cocktail.ingredients);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
