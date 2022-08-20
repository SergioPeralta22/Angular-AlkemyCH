import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FootAPIService } from '../../services/foot-api.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  term: string = '';

  constructor(private footApiService: FootAPIService) {}
  ngOnInit(): void {}

  search(): void {
    console.log(this.term);

    this.footApiService.getRecipes(this.term).subscribe((data) => {
      console.log(data);
    });
  }
}
