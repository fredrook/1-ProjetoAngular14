import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjetoAngular';

  isAuthenticated = false;

/*   constructor(private store: Store) {
    this.store
      .select((state) => state.auth.isAuthenticated)
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
      });
  } */
}
