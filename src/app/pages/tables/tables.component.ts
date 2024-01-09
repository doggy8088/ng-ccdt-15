import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  ngOnInit(): void {

    const datatablesScript = document.createElement('script');
    datatablesScript.src = 'assets/js/demo/datatables-demo.js';
    document.body.appendChild(datatablesScript);

  }
}
