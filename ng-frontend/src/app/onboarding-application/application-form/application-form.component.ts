import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { getNameList } from 'country-list';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FileUploadComponent } from '../file-upload/file-upload.component'


@Component({
  selector: 'app-application-form',
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FileUploadComponent
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})

export class ApplicationFormComponent {
  private _formBuilder = inject(FormBuilder);
  public _countries = Object.entries(getNameList()).map(([name,code]) => ({code,name}));
  

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;

}
