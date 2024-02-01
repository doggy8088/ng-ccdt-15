import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './models/news';
import { map } from 'rxjs';
import { API_URL } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(API_URL) private apiUrl: string, private http: HttpClient) { }

  firstClick() {
    console.log('Your API URL is ' + this.apiUrl);
  }

  loadNews() {
    return this.http.get<News>(this.apiUrl + '/assets/data.json')
      .pipe(
        map((data: News) => data.news)
      );
  }
}
