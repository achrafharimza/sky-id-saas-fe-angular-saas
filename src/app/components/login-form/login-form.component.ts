import { AuthService } from './../../service/login/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  validateForm!: FormGroup;
  errMsg: string;

  constructor(private fb: FormBuilder , private login: AuthService, private router: Router,private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],
      // remember: [true]
    });
  }
  get email(){
    return this.validateForm.get('email');
  }
  get password(){
    return this.validateForm.get('password');
  }


  createMessage(msg:string,type: string): void {
    this.message.create(type,msg );
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      
      this.login.Authentication(this.validateForm.get('email').value, this.validateForm.get('password').value).subscribe(
        {
          next: data => {
            this.createMessage("login successful",'success');
            console.log('submit', this.validateForm.value);
            this.router.navigate(['/home']);
          },
          error: err => {
            this.errMsg = 'Email or Password is incorrect';
            this.createMessage("Email or Password is incorrect",'error');
            console.log(this.errMsg);

          }
        }
      );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


}
