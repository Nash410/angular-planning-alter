import { Component, OnInit } from '@angular/core';
import { AlterService } from '../../service/alter.service';
import { AlterModel } from '../../model/alter.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-alter',
  templateUrl: './single-alter.component.html',
  styleUrls: ['./single-alter.component.css']
})
export class SingleAlterComponent implements OnInit {

  alter: AlterModel;

  constructor(private route: ActivatedRoute, private altersService: AlterService,
              private router: Router) { }

  ngOnInit() {
    this.alter = new AlterModel('', '', '');
    const id = this.route.snapshot.params['id'];
    this.altersService.getSingleAlter(+id).then(
      (alter:AlterModel)=>{
        this.alter = alter;
      }
    )
  }

  onBack(){
    this.router.navigate(['/alter']);
  }

}