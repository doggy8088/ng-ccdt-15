import { Component, OnInit } from '@angular/core';
import { appVersion } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'ng-router ' + appVersion;

}
