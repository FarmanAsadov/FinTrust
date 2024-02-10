import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {


 // variable
 show_type: boolean = false;
 show_eye: boolean = false;
 resetPassword: FormGroup;

 constructor(private fb: FormBuilder) {
  this.resetPassword = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]]
  });
}
get email(): AbstractControl | any{
  return this.resetPassword.get('email');
}
get password(): AbstractControl | any{
  return this.resetPassword.get('password');
}

//Function
showPassword() {
   this.show_type = !this.show_type;
   this.show_eye = !this.show_eye;
 }
 

  


}
