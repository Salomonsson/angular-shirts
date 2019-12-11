import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShirtDetailComponent } from './shirt-detail/shirt-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShirtsComponent,
    ShirtDetailComponent
  ],
  // @NgModule metadata's imports array, which contains a list of external modules that the app needs.
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
