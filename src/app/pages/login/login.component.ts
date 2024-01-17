import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  data: any = {
    email: '',
    password: '',
    remember: true
  };

  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('bg-gradient-primary');
  }

  doSubmit(form: NgForm) {
    if (form.valid) {
      // data.SendDataToServer(this.data);
    }

    // form.submitted
  }
}
