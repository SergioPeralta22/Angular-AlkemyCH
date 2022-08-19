import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarModule } from '../../components/searchbar/searchbar.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { DishListModule } from '../../components/dish-list/dish-list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SpinnerModule, SearchbarModule, DishListModule],
})
export class HomePageModule {}
