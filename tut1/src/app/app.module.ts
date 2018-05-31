import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TxtformatterPipe } from './txtformatter.pipe';
import { SwitchcaseComponent } from './switchcase/switchcase.component';

@NgModule({
  declarations: [
    AppComponent,
    TxtformatterPipe,
    SwitchcaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
