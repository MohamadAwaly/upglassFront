import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CocktailService} from "../../../../shared/services/cocktail.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Cocktail} from "../../../../shared/interfaces/cocktail";
import {first} from "rxjs";

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {

  public cocktail?: Cocktail;

  public cocktailForm: FormGroup = this.initForm();


  get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  public addIngredient(): void {
    this.ingredients.push(this._fb.group({
      name: ['', Validators.required],
      quantity: [0, Validators.required]
    }))
  }

  constructor(private _fb: FormBuilder,
              private _cocktailService: CocktailService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this._cocktailService.getCocktail(+index).pipe(first()).subscribe((cocktail:Cocktail) =>
        this.cocktail = cocktail);
        this.cocktailForm =  this.initForm(this.cocktail);
      } else {
        this.initForm();
      }
    })
  }

  private initForm(cocktail: Cocktail = {name: '', description: '', img: '', ingredients: []}): FormGroup {
    return this._fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this._fb.array(
        cocktail.ingredients.map(ingredient =>
          this._fb.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required]
          })
        ),
        Validators.required
      )
    });
  }

  public submit(): void {
    if (this.cocktail) {
      this._cocktailService.editCocktail(this.cocktail._id! ,this.cocktailForm.value).subscribe();
    } else {
      this._cocktailService.addCocktail(this.cocktailForm.value).subscribe();
    }
    this._router.navigate(['..'], {relativeTo: this._activatedRoute});
  }

}
