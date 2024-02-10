import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  
 // variable
 rememberMe: boolean = false; 
 show_type: boolean = false;
 show_eye: boolean = false;
 registerForm: FormGroup;

 constructor(private fb: FormBuilder) {
  this.registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]],
    name: ['',[Validators.required,Validators.minLength(3)]]

  });
}
get email(): AbstractControl | any{
  return this.registerForm.get('email');
}
get password(): AbstractControl | any{
  return this.registerForm.get('password');
}
get name(): AbstractControl | any{
  return this.registerForm.get('name')
}

//Function
showPassword() {
   this.show_type = !this.show_type;
   this.show_eye = !this.show_eye;
 }
 onSubmit() {
  if (this.registerForm.valid) {
    const emailValue = this.registerForm.get('email')?.value;
    const passwordValue = this.registerForm.get('password')?.value;
    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);
  } else {
    console.log('Form is invalid');
  }

  
}
}

