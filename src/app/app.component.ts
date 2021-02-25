import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'scalatr0ne';

  items = ['Apple', 'Banana', 'Orange'];
  itemx: Observable<string>[] = []

  newIngredient(e: Observable<string>) {
    this.itemx.push(e)
  }
}
