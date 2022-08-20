import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IApiResponse } from '../models/interfaces/apiResponse.interface';
import { IDish } from '../models/interfaces/Dish.interface';

@Injectable({
  providedIn: 'root',
})
export class FootAPIService {
  private apiUrl: string = 'https://api.spoonacular.com/';
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getRecipes(query: string): Observable<IDish[]> {
    return this.http
      .get<IApiResponse>(
        `${this.apiUrl}recipes/complexSearch?query=${query}&apiKey=${this.apiKey}&addRecipeInformation=true`
      )
      .pipe(
        map((response) => {
          return response.results;
        })
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
