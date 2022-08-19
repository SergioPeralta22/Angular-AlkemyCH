import { Component, OnInit } from '@angular/core';
import { IDish } from '../../models/interfaces/Dish.interface';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
})
export class DishListComponent implements OnInit {
  dish1: IDish = {
    id: 1,
    vegan: true,
    image: 'assets/images/dish1.jpg',
    title: 'Pizza',
    pricePerServing: 10.0,
    healthScore: 100,
    preparationMinutes: 10,
    summary:
      'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients.',
  };

  dish2: IDish = {
    id: 2,
    vegan: true,
    image: 'assets/images/dish2.jpg',
    title: 'Pasta',
    pricePerServing: 10.0,
    healthScore: 100,
    preparationMinutes: 10,
    summary:
      'Pasta is a dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients.',
  };

  constructor() {}

  ngOnInit(): void {}
}
