import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SubmittedComponent} from "./submitted.component";
import {ForbiddenValidatorDirective} from "./forbidden-name.directive";

@NgModule({
  declarations: [
    AppComponent,
    SubmittedComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
