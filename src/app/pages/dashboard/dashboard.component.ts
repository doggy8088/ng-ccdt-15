import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  data = inject(DataService);

  news$: any;

  ngOnInit() {

    this.data.firstClick();

    this.news$ = this.data.loadNews();

    const chartAreaScript = document.createElement('script');
    chartAreaScript.src = 'assets/js/demo/chart-area-demo.js';
    document.body.appendChild(chartAreaScript);

    const chartPieScript = document.createElement('script');
    chartPieScript.src = 'assets/js/demo/chart-pie-demo.js';
    document.body.appendChild(chartPieScript);

    this.route.data.subscribe((data) => {
      console.log(data['pageTitle']);
    });
  }

  gotoPage(pageName: string, name: string, id: number): void {
    this.router.navigate([`${pageName}/${name}`], {
      queryParams: { id: id },
    });
  }
}
