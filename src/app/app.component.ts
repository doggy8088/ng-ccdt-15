import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appVersion } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-router ' + appVersion;

}
