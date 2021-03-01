import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketgateService } from './services/websocketgate.service';
import { tap } from 'rxjs/operators';

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
  }

  sendMessages(msg: Observable<string>) {
    msg.subscribe(el => this.wsGate.sendMessage({message: el, UserID: 34}))
  }
}
