import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
 // variable
 rememberMe: boolean = false; 
 show_type: boolean = false;
 show_eye: boolean = false;
 loginForm: FormGroup;


 constructor(private fb: FormBuilder) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]]
  });
}
get email(): AbstractControl | any{
  return this.loginForm.get('email');
}
get password(): AbstractControl | any{
  return this.loginForm.get('password');
}

//Function
showPassword() {
   this.show_type = !this.show_type;
   this.show_eye = !this.show_eye;
 }
 onSubmit() {
  if (this.loginForm.valid) {
    const emailValue = this.loginForm.get('email')?.value;
    const passwordValue = this.loginForm.get('password')?.value;
    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);
  } else {
    console.log('Form is invalid');
  }

  console.log("asdasasas");
  
}
}
