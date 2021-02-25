import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { WebsocketgateService } from '../../services/websocketgate.service';

@Injectable({
  providedIn: 'root'
})
export class WsconnectorResolver implements Resolve<boolean> {
  constructor(private wsGate: WebsocketgateService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.wsGate.connect()
  }
}
