import { NgModule } from '@angular/core';
import { DishListComponent } from './dish-list.component';
import { DishModule } from '../dish/dish.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DishListComponent],
  imports: [DishModule, CommonModule],
  exports: [DishListComponent],
})
export class DishListModule {}
