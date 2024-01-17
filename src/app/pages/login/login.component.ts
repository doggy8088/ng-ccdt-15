import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  data: any = {
    email: '',
    password: '',
    remember: true
  };

  @ViewChild('mEmail', { static: false }) mEmail!: NgModel;

  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');
  }

  ngAfterViewInit(): void {
    this.mEmail.valueChanges?.pipe(
      debounceTime(500)
    ).subscribe((value) => {
      // this.mEmail.control.validator?.(this.mEmail.control);
      console.log(value);
    });
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
