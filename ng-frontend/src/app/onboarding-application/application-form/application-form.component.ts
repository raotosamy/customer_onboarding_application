import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { getNameList } from 'country-list';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FileUploadComponent } from '../file-upload/file-upload.component'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-application-form',
  standalone: true,
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
    FileUploadComponent,
    HttpClientModule,
    NgIf
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})

export class ApplicationFormComponent {
  @ViewChild(MatStepper) stepper: MatStepper | undefined;
  private _formBuilder = inject(FormBuilder);
  public _countries = Object.entries(getNameList()).map(([name,code]) => ({code,name}));
  public _application_id = undefined;

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    typeId: ['', Validators.required],
    company: ['', Validators.required],
    entityId: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    businessId: ['', Validators.required],
    licence: ['', Validators.required],
    regNumber: ['', Validators.required],
    country: ['', Validators.required],
    dateInc: ['', Validators.required],
    passeport: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    
  });
  isLinear = true;

  constructor(private http: HttpClient, private router: Router) {}

  submitHandler(){
    if(this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid){
      const formData = Object.assign({}, this.firstFormGroup.value, Object.assign({}, this.secondFormGroup.value, Object.assign({},this.thirdFormGroup.value,{id:null}) ));
      //console.log(Date.parse(formData.dateInc as string));
      //const date = new Date(formData.dateInc);
      const date = new Date(Date.parse(formData.dateInc as string));
      if(date != undefined){
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        formData.dateInc = `${year}-${month}-${day}`;
      }
      if(this._application_id != undefined){
        formData["id"] = this._application_id;
      }
      this.http.post<any>('http://localhost:8081/applications', formData).subscribe({
        next: (response) => {
          const regex = /(?<=\/applications\/)[a-f0-9]{32}/;
          if(response._links.onboardingApplication.href){
            const match = response._links.onboardingApplication.href.match(regex);
            if(match){
              this._application_id = match[0];
            } 
          }else{
            console.error('Fatal error');
          }
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
    }
  }

  resetStepper(){
    if (this.stepper) {
      this._application_id = undefined;
      this.stepper.reset();
    }
  }

}
