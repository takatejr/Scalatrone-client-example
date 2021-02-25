import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketgateService } from './services/websocketgate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'scalatr0ne';

  constructor(private wsGate: WebsocketgateService) {}

  items = ['Apple', 'Banana', 'Orange'];
  itemx: Observable<string>[] = []

  newIngredient(e: Observable<string>) {
    this.itemx.push(e);
    this.wsGate.sendMessage({message: `message from frontend`})
  }
}
