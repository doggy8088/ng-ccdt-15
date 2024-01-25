import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  data: any = {
    name: 'Will',
    tel: '0944-444444',
    addresses: [
      {
        city: 'Taipei',
        address1: '內湖區',
        address2: '某某大道 1 號'
      },
      {
        city: 'Taichung',
        address1: '中區',
        address2: '臺灣大道100號'
      }
    ]
  };

  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control('', {
      validators: [Validators.required],
      updateOn: 'blur'
    }),
    addresses: this.fb.nonNullable.array([
      this.fb.nonNullable.group({
        city: this.fb.nonNullable.control('台北'),
        address1: this.fb.nonNullable.control(''),
        address2: this.fb.nonNullable.control(''),
      }),
      this.fb.nonNullable.group({
        city: this.fb.nonNullable.control('台中'),
        address1: this.fb.nonNullable.control(''),
        address2: this.fb.nonNullable.control(''),
      }),
    ])
  });

  ngOnInit(): void {
    document.body.classList.add('bg-gradient-primary');

    // this.form.setValue(this.data);
    // this.form.patchValue(this.data);
  }

  resetForm() {
    this.form.reset();
    // this.form.reset(this.data);
    // this.form.disable();
    // this.form.enable();
  }

  doSubmit() {
    if (this.form.invalid) {
      console.log('表單驗證失敗');
      // this.form.value;
    }
  }

}
