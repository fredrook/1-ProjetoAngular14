import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
/* import { register } from '../store'; */
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class ModalRegisterComponent {
  name: string = '';
  anotherName: string = '';
  email: string = '';
  password: string = '';

  constructor(private store: Store) {}

  /* submit() {
    this.store.dispatch(register({ user: { name: this.name, anotherName: this.anotherName, email: this.email, password: this.password } }));
  }  */

}
