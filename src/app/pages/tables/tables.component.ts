import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  data = inject(DataService);

  id: string | null = null;
  name: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.data.firstClick();

    // this.id = this.route.snapshot.queryParamMap.get('id');

    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    });

    // this.name = this.route.snapshot.paramMap.get('name');

    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });

    const datatablesScript = document.createElement('script');
    datatablesScript.src = 'assets/js/demo/datatables-demo.js';
    document.body.appendChild(datatablesScript);

  }
}
