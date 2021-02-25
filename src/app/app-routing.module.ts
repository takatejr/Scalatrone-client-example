import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WsconnectorResolver } from './resolvers/wsconnector/wsconnector.resolver';
import { HomeComponent } from './components/home/home.component';
import { WsconnectorGuard } from './guards/wsconnector.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      WsConnector: WsconnectorResolver
    },
    canLoad: [WsconnectorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
