import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootAPIService {
  private apiUrl: string = 'https://api.spoonacular.com/';
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getRecipes(query: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}recipes/complexSearch?apiKey=${this.apiKey}&query=${query}&addRecipeInformation=true&addRecipeNutrition=true`
    );
  }

  getVeganRecipes() {
    return this.http.get(
      `${this.apiUrl}recipes/search?apiKey='${this.apiKey}'&type=vegan&number=10`
    );
  }

  getRecipeDetails(id: number) {
    return this.http.get(
      `${this.apiUrl}recipes/${id}/information?apiKey='${this.apiKey}'&includeNutrition=true`
    );
  }
}
