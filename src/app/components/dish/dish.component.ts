import { Component, Input, OnInit } from '@angular/core';
import { IDish } from '../../models/interfaces/Dish.interface';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})
export class DishComponent implements OnInit {
  @Input() dish: IDish | undefined;

  constructor() {}

  ngOnInit(): void {}

  deleteDish() {
    console.log('delete dish');
  }

  addToMenu() {
    console.log('add to menu');
  }
}
