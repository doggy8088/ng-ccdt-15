import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  data: any = {
    email: 'user@example.com',
    password: '123',
    remember: true
  };

  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-gradient-primary');
  }
}
