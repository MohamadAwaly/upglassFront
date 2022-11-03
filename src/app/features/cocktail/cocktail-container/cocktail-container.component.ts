import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cocktail} from "../../../shared/interfaces/cocktail";
import {CocktailService} from "../../../shared/services/cocktail.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit, OnDestroy {

  public cocktails: Cocktail[] = [];
  public subscribtion: Subscription = new Subscription();

  constructor(private _cocktailService: CocktailService) {
  }

  ngOnInit(): void {
    this.subscribtion.add(this._cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => this.cocktails = cocktails));
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
