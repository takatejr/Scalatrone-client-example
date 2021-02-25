import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WsconnectorResolver } from './resolvers/wsconnector/wsconnector.resolver';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      WsConnector: WsconnectorResolver
    },
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
