import {Injectable} from '@angular/core';
import {Cocktail} from "../interfaces/cocktail";
import {BehaviorSubject, filter, map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  // contient la liste des cocktails
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([]);


  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: Cocktail[]) => cocktails != null),
      map((cocktails: Cocktail[]) => {
        return cocktails[index];
      })
    );
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this._http.post<Cocktail>('https://restapi.fr/api/cocktails', cocktail).pipe(
      tap((savedCocktail: Cocktail) => {
        const value = this.cocktails$.value;
        this.cocktails$.next([...value, savedCocktail]);
      })
    );
  }

  public editCocktail(
    cocktailId: string,
    editedCocktail: Cocktail
  ): Observable<Cocktail> {
    return this._http
      .patch<Cocktail>(
        `https://restapi.fr/api/cocktails/${cocktailId}`,
        editedCocktail
      )
      .pipe(
        tap((savedCocktail: Cocktail) => {
          this.cocktails$.next(
            this.cocktails$.value.map((cocktail: Cocktail) => {
              if (cocktail.name === savedCocktail.name) {
                return savedCocktail;
              } else {
                return cocktail;
              }
            })
          );
        })
      );
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this._http.get<Cocktail[]>("https://restapi.fr/api/cocktails").pipe(
      tap((cocktails: Cocktail[]) => {
        this.cocktails$.next(cocktails);
      })
    );
  }

  constructor(private _http: HttpClient) {
  }
}


