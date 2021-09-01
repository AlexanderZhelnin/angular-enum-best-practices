import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkPipe } from './work.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
