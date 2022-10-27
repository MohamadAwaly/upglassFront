import {Component, Input, OnInit} from '@angular/core';
import {Cocktail} from "../../shared/interfaces/cocktail";

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  @Input() public cocktail!: Cocktail;

  constructor() {
  }

  ngOnInit(): void {
  }

}