import { Component } from '@angular/core';
import { CriteriaBox } from './CriteriaBox.Model';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { V } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CriteriaBoxList: CriteriaBox[];

  myForm: FormGroup;
  NewIcd9cmCodes: AbstractControl;
  NewIcd10cmCodes: AbstractControl;
  NewOperand: AbstractControl;

  constructor(myFrmBuilder: FormBuilder) {
    this.CriteriaBoxList = [];
    this.myForm = myFrmBuilder.group({
      'NewIcd9cmCodes': ['', Validators.required],
      'NewIcd10cmCodes': ['', Validators.required],
      'NewOperand': ['', Validators.required]
    });

    this.NewIcd9cmCodes = this.myForm.controls['NewIcd9cmCodes'];
    this.NewIcd10cmCodes = this.myForm.controls['NewIcd10cmCodes'];
    this.NewOperand = this.myForm.controls['NewOperand'];

  }

  AddCriteria(): void {
    this.CriteriaBoxList.push(new CriteriaBox(this.NewIcd9cmCodes.value, this.NewIcd10cmCodes.value, this.NewOperand.value));
  }

  ResetForm(newICD9CMCodes: HTMLInputElement, newICD10CMCodes: HTMLInputElement, newOperand: HTMLInputElement): boolean {
    newICD9CMCodes.value = '';
    newICD10CMCodes.value = '';
    newOperand.value = '';
    return false;
  }
}
