import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  data: any = {
    email: '',
    password: '',
    remember: true
  };

  fb = inject(FormBuilder);

  form = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(6)]
    }),
    remember: this.fb.control(true)
  });

  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');
  }

  doSubmit() {
    if (this.form.invalid) {
      console.log('表單驗證失敗');
    }
  }

}
