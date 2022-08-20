import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}
