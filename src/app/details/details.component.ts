import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  itemDetails: Details = {} as Details;
  showMore: boolean = false;
  similarMovies: Details[] = [];
  notExist: boolean = false;
  media_type: string = '';
  constructor(
    private _tending: TrendingService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.itemDetails.seasons) {
      this.itemDetails.seasons.forEach((item) => (item.showMore = false));
    }
    this.getDetails();
    this.getSimilar();
  }

  getDetails() {
    let { id, mediaType } = this._activatedRoute.snapshot.params;
    this._tending.trendDetails(mediaType, id).subscribe({
      next: (res) => {
        this.media_type = mediaType;
        this.itemDetails = res;
        console.log(this.itemDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getSimilar() {
    let { id, mediaType } = this._activatedRoute.snapshot.params;
    this._tending.getSimilar(mediaType, id).subscribe({
      next: (res) => {
        this.similarMovies = res.results
          .filter((item: any) => item.poster_path !== null)
          .slice(0, 6);
        console.log(this.similarMovies);
      },
      error: (err) => {
        console.log(err);
        this.notExist = true;
      },
    });
  }
  similarContentDetails(media_type: string, id: number) {
    this._tending.trendDetails(this.media_type, id).subscribe({
      next: (res) => {
        this.itemDetails = res;
      },
    });
    this._tending.getSimilar(media_type, id).subscribe({
      next: (res) => {
        this.similarMovies = res.results
          .filter((item: any) => item.poster_path !== null)
          .slice(0, 6);
      },
    });
  }
}
