import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.queryParamMap.get('id');

    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    });

    const datatablesScript = document.createElement('script');
    datatablesScript.src = 'assets/js/demo/datatables-demo.js';
    document.body.appendChild(datatablesScript);

  }
}
