import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {GithubComponent} from "./github/github.component";
import {GithubRestService} from "./service/github-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, GithubComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,HttpClientModule],
  providers: [GithubRestService, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
