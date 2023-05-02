import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Trending } from '../trending';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendMovies: Trending[] = [];
  trendTV: Trending[] = [];
  trendPerson: Trending[] = [];

  constructor(private _trendingService: TrendingService) {}

  ngOnInit(): void {
    this.trendingMovies();
    this.trendingTV();
    this.trendingPerson();
  }

  trendingMovies() {
    this._trendingService.getTrending('movie').subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendMovies = res.results.slice(0, 10);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  trendingTV() {
    this._trendingService.getTrending('tv').subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendTV = res.results.slice(0, 10);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  trendingPerson() {
    this._trendingService.getTrending('person').subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendPerson = res.results.slice(0, 10);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
