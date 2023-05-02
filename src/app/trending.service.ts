import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private _httpClient: HttpClient) {}

  getTrending(mediaType: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=ca41b012a46937662beddbad3ef0f7ff`
    );
  }

  trendDetails(mediaType: string, id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=ca41b012a46937662beddbad3ef0f7ff&language=en-US`
    );
  }
  getSimilar(mediaType: string, id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=ca41b012a46937662beddbad3ef0f7ff&language=en-US`
    );
  }
}
