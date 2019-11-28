import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlterService } from '../../service/alter.service';
import { AlterModel } from '../../model/alter.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-alter',
  templateUrl: './form-alter.component.html',
  styleUrls: ['../../../styleForm.css']
})
export class FormAlterComponent implements OnInit {

alterForm: FormGroup;
errorMessage: string;

constructor(private formBuilder: FormBuilder,
              private alterService: AlterService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.alterForm = this.formBuilder.group({
      nom_alternant : ['', [Validators.required]],
      dateD : ['', [Validators.required]],
      dateF : ['', [Validators.required]]

    });
  }

  onSaveAlter() {
    const nom_alternant = this.alterForm.get('nom_alternant').value;
    const dateD = this.alterForm.get('dateD').value;
    const dateF = this.alterForm.get('dateF').value;
    const newAlter = new AlterModel(nom_alternant, dateD, dateF);
    this.alterService.createNewAlter(newAlter);
    this.router.navigate(['/alter']);

  }

}