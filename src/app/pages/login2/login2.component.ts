import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  data: any = {
    name: '',
    address: {
      city: '',
      address1: '',
      address2: ''
    }
  };

  fb = inject(FormBuilder);

  form = this.fb.group({
    name: this.fb.control('', {
      validators: [Validators.required],
      updateOn: 'blur'
    }),
    address: this.fb.group({
      city: this.fb.control(''),
      address1: this.fb.control(''),
      address2: this.fb.control(''),
    })
  });

  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');
  }

  doSubmit() {
    if (this.form.invalid) {
      console.log('表單驗證失敗');
      // this.form.value;
    }
  }

}
