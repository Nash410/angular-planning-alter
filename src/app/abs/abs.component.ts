import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AbsService } from '../service/abs.service';
import { PrettyDateService } from '../service/pretty-date.service';
import { AbsModel } from '../model/abs.model';
import { Subscription } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent implements OnInit, OnDestroy {

  absList: AbsModel[];
  absSubscription: Subscription;
  @Input() alterId: number;
  @Input() nomAlter:string;
  faPlus = faPlus;

  constructor(private absService: AbsService, private router: Router, private prettyDateService: PrettyDateService) {}

  ngOnInit() {
    this.absSubscription = this.absService.absSubject.subscribe(
      (alters: AbsModel[]) => {
        this.absList = alters;     
        //Prettyfier la date
        for(let abs in this.absList){
          this.absList[abs].dateDebutAbs = this.prettyDateService.getPrettyDate(this.absList[abs].dateDebutAbs);
          this.absList[abs].dateFinAbs = this.prettyDateService.getPrettyDate(this.absList[abs].dateFinAbs);
        }       
      }
    )
    this.absService.emitAbs();
  }

  onDeleteAlter(abs:AbsModel){
    this.absService.removeAbs(abs);
  }

  onNewAbs(){
    this.router.navigate(['/abs', 'new', this.alterId]);
  }

  onBack(){
    this.router.navigate(['/alter', 'view', this.alterId]);
  }

  ngOnDestroy(){
    this.absSubscription.unsubscribe();
  }



}