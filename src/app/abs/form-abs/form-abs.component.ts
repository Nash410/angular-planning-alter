import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { AbsService } from '../../service/abs.service';
import { AbsModel } from '../../model/abs.model';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-form-abs',
  templateUrl: './form-abs.component.html',
  styleUrls: ['./form-abs.component.css']
})
export class FormAbsComponent implements OnInit {

absForm: FormGroup;
@Input() nomAlter:string;
libelleAbs = [
    {name: 'Formation', abbrev: 'FORM'},
    {name: 'Congé', abbrev: 'CONG'},
    {name: 'Autre', abbrev: 'AUTR'}
  ];

constructor(private formBuilder: FormBuilder,
              private absService: AbsService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.absForm = this.formBuilder.group({
      libelleAbs : new FormControl(this.libelleAbs[2]),
      dateD : ['', [Validators.required]],
      dateF : ['', [Validators.required]]
    });
  }

  onSaveAbs() {
    const libelleAbs = this.absForm.get('libelleAbs').value;
    const dateD = this.absForm.get('dateD').value;
    const dateF = this.absForm.get('dateF').value;
    const idAlter = this.route.snapshot.paramMap.get('idAlter');
    const newAbs = new AbsModel(dateD, dateF, libelleAbs, Number(idAlter));
    this.absService.createNewAbs(newAbs);
    this.router.navigate(['/alter', 'view', idAlter]);

  }

}