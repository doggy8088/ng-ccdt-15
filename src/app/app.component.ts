import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-router';

  ngOnInit() {
    Promise.all([
      loadScript('assets/js/demo/chart-area-demo.js'),
      loadScript('assets/js/demo/chart-pie-demo.js'),
    ])
      .then(() => {
        // Scripts have been loaded
      })
      .catch((error) => {
        // Handle error if scripts fail to load
      });
  }
}

function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

