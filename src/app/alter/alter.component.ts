import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlterService } from '../service/alter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {

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
      nom_alternant : ['', [Validators.required, Validators.email]],
      dateD : ['', [Validators.required]],
      dateF : ['', [Validators.required]]

    }, {validator: this.dateLessThan('dateD', 'dateF')});
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "Période de contrat incorrecte."
        };
      }
      return {};
    }
}

  onSubmit() {
    const nom_alternant = this.alterForm.get('nom_alternant').value;
    const dateD = this.alterForm.get('dateD').value;
    const dateF = this.alterForm.get('dateF').value;

    this.alterService.createNewAlter(nom_alternant, dateD, dateF).then(
      () => {
        this.router.navigate(['/alter']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}