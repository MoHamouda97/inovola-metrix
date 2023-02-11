import { AuthService } from '../../../core/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/shared/interfaces/response.interface';
import { Token } from 'src/app/core/token/token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private router: Router, 
    private service: AuthService) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', Validators.required),
    })
  }

  get email() { 
    return this.signInForm.get('email'); 
  }

  get password() { 
    return this.signInForm.get('password'); 
  }
  
  signIn() {
    if (this.signInForm.valid) {
      this.signInForm.disable();

      this.service.login(this.signInForm.value).subscribe(
        (res: IResponse) => {
          if (res.code === 1) {
            Token.setToken(res.data.accessToken);
            this.router.navigate(['app/form-builder']);
          }

          this.signInForm.enable();
        }
      );
    }
  }  
  
}
