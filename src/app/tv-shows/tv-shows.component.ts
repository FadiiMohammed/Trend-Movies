import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trending } from '../trending';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  trendTV: Trending[] = [];

  constructor(private _trendingService: TrendingService) {}
  ngOnInit(): void {
    this.trendingTV();
  }

  trendingTV() {
    this._trendingService.getTrending('tv').subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendTV = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
