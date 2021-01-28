import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgPageComponent } from './svg-page/svg-page.component';
import { SiderPageComponent } from './sider-page/sider-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgPageComponent,
    SiderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
