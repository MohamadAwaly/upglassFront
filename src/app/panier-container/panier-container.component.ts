import {Component, OnDestroy, OnInit} from '@angular/core';
import {PanierService} from "../shared/services/panier.service";
import {Ingredient} from "../shared/interfaces/ingredient";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss']
})
export class PanierContainerComponent implements OnInit, OnDestroy {

  public ingredients : Ingredient[] | null = null;
  public subscription: Subscription = new Subscription();

  constructor(private _panierService: PanierService) {
  }

  ngOnInit(): void {
    this.subscription.add(this._panierService.ingredients$.subscribe((ingredients: Ingredient[] | null) =>
      this.ingredients = ingredients))
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
