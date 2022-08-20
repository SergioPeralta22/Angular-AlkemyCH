import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
} from 'rxjs';
import { FootAPIService } from '../../services/foot-api.service';
import { Router } from '@angular/router';
import { IDish } from '../../../../../ALaCarta/src/app/models/interfaces/Dish.interface';
import { IApiResponse } from '../../models/interfaces/apiResponse.interface';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  term: string = '';
  showDishes: Array<IDish> = [];

  constructor(private footApiService: FootAPIService, private route: Router) {}
  ngOnInit(): void {}

  @ViewChild('recipeSearchInput', { static: true })
  recipeSearchInput!: ElementRef;

  search() {
    fromEvent(this.recipeSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        filter((res) => res.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(
        (text: string) => {
          this.footApiService.getRecipes(this.term).subscribe((result: any) => {
            console.log(result);
            this.showDishes = result;
          });
        },
        (err: any) => {
          console.log('error', err);
        }
      );
  }

  details(id: any) {
    this.route.navigate([`/detalle/${id}`]);
  }
}
