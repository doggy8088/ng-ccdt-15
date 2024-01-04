import { Component, OnInit } from "@angular/core";
import { VERSION } from "src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = VERSION;
  counter = 0;

  user!: User;
  x = 0;
  y = 0;

  ngOnInit() {
    setTimeout(() => {
      this.title = 'Angular 15';
    }, 2000);
  }

  changeTitle(name: string) {
    this.counter++;
    this.title = name + ' ' + this.counter;
  }

  ShowCoordinate(evt: MouseEvent) {
    this.x = evt.clientX;
    this.y = evt.clientY;
  }

  clearTitle() {
    this.title = ''
  }

  doSubmit(msg: string) {
    console.log(msg);
  }
}


interface User {
  id: number;
  name?: string;
  tel?: string
}
