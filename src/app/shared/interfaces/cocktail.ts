import {Ingredient} from "./ingredient";

export interface Cocktail {
  name: string;
  img?: string; // optionelle
  description: string;
  ingredients?: Ingredient []; // tableau d'ingrédient.
}
