import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { News, NewsElement } from 'src/app/models/news';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  router = inject(Router);
  route = inject(ActivatedRoute);
  data = inject(DataService);

  // news$!: Observable<News>;

  news: NewsElement[] = [];

  newsSubscription!: Subscription;

  ngOnInit() {

    this.data.firstClick();

    // this.news$ = this.data.loadNews();

    this.newsSubscription = this.data.loadNews().subscribe((data) => {
      this.news = data;
    });

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

  ngOnDestroy(): void {
    this.newsSubscription.unsubscribe();
  }

  gotoPage(pageName: string, name: string, id: number): void {
    this.router.navigate([`${pageName}/${name}`], {
      queryParams: { id: id },
    });
  }
}
