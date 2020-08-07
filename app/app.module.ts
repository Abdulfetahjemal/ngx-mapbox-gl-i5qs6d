import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DemoModule } from './demo/module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    DemoModule,
    RouterModule.forRoot([])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
