import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationFormComponent } from './application-form/application-form.component';


@NgModule({
  declarations: [ApplicationFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [ApplicationFormComponent]
})
export class OnboardingApplicationModule { }
