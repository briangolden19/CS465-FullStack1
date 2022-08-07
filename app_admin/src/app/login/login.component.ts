import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { User } from '../models/user';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Creds } from '../models/creds';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formError: string = '';
  loginForm: FormGroup;
  public creds = {
    name: '',
    email: '',
    password: ''
  };
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    })
  }

  public onLoginSubmit(): void {
    this.formError = '';
    const tempCreds = this.loginForm.value as Creds;
    this.creds.email = tempCreds.email;
    this.creds.password = tempCreds.password;
    if (!this.creds.email || !this.creds.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    this.authenticationService.login(this.creds)
      .then(() => this.router.navigateByUrl('list-trips'))
      .catch((message) => this.formError = message);
  }
}