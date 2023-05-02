import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trending } from '../trending';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  trendPerson: Trending[] = [];

  constructor(private _trendingService: TrendingService) {}

  ngOnInit(): void {
    this.trendingPerson();
  }

  trendingPerson() {
    this._trendingService.getTrending('person').subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendPerson = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
