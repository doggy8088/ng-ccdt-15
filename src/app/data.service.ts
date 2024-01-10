import { Inject, Injectable } from '@angular/core';
import { API_URL } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(API_URL) private apiUrl: string) { }

  firstClick() {
    console.log('Your API URL is ' + this.apiUrl);
  }
}
