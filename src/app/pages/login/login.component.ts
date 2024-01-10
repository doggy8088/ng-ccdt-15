import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-gradient-primary');
  }
}
