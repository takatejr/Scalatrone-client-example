import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebsocketgateService {
  public socket$!: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  public messages$ = this.messagesSubject$.pipe(map(e => e), catchError(e => { throw e }));

  public connect(): WebSocketSubject<any> {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      const messages = this.socket$.pipe(
        tap({
          error: error => console.log(error),
        }), catchError(_ => EMPTY));
      this.messagesSubject$.next(messages);

    }
    return this.socket$
  }
  
  private getNewWebSocket() {
    return webSocket(environment.WS_ENDPOINT);
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  close() {
    this.socket$.complete();
   }

  constructor() { 
  }

}
