import { Component, OnInit } from '@angular/core';
import { Trending } from '../trending';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  trendMovies: Trending[] = [];

  constructor(private _trendingService: TrendingService) {}

  ngOnInit(): void {
    this.trendingMovies();
  }

  trendingMovies() {
    this._trendingService.getTrending('movie').subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendMovies = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
