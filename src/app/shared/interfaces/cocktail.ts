import {Ingredient} from "./ingredient";

export interface Cocktail {
  _id?: string;
  name: string;
  img?: string; // optionelle
  description: string;
  ingredients: Ingredient []; // tableau d'ingrédient.
}
