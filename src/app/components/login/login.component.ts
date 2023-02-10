import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(login({ user: { email: this.email, password: this.password } }));
  }
}
