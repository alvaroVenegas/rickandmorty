import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm: any = null;
  submitted = false

  constructor(private formBuider: FormBuilder) {
    this.contactForm = this.formBuider.group(
      {
        myName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(14)]],
        email: ['', [Validators.required, Validators.email]],
        description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(244)]],
        gender: ['', [Validators.required]],
        age: [0, [Validators.required, Validators.min(18)]],
      })

      this.contactForm.valueChanges.subscribe((changes:any) => {
        console.log(changes)
      })
      this.contactForm.statusChanges.subscribe((changes:any) => {
        console.log(changes)
      })
      /// atacamos a la clave myName dentro del formulario
      this.contactForm.controls.myName.valueChanges.subscribe((changes:any) => {
        console.log(changes)
      })  

  }

  ngOnInit(): void {

  }

  submitForm() {
    this.submitted = true
    console.log(this.contactForm.value)
    console.log(this.contactForm)
  }
}
