import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cocktail} from "../../../../shared/interfaces/cocktail";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  @Input() public cocktails!: Cocktail[];
  public search: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }


}
