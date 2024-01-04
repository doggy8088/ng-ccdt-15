import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    const chartAreaScript = document.createElement('script');
    chartAreaScript.src = 'assets/js/demo/chart-area-demo.js';
    document.body.appendChild(chartAreaScript);

    const chartPieScript = document.createElement('script');
    chartPieScript.src = 'assets/js/demo/chart-pie-demo.js';
    document.body.appendChild(chartPieScript);
  }
}
