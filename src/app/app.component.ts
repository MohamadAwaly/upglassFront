import {Component, OnInit} from '@angular/core';
import {Cocktail} from "./shared/interfaces/cocktail";
import {CocktailService} from "./shared/services/cocktail.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _cocktailService : CocktailService) {
  }

  ngOnInit(): void {
    this._cocktailService.fetchCocktails().subscribe();
  }

}
