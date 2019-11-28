import { Component, OnDestroy, OnInit } from "@angular/core";
import { AlterService } from "../service/alter.service";
import { AlterModel } from "../model/alter.model";
import { PrettyDateService } from "../service/pretty-date.service";
import { faPlus } from '@fortawesome/free-solid-svg-icons';


import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-alter",
  templateUrl: "./alter.component.html",
  styleUrls: ["./alter.component.css"]
})
export class AlterComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  alters: AlterModel[];
  altersSubscription: Subscription;

  constructor(
    private altersService: AlterService,
    private router: Router,
    private prettyDateService: PrettyDateService
  ) {}

  ngOnInit() {
    this.altersSubscription = this.altersService.altersSubject.subscribe(
      (alters: AlterModel[]) => {
        this.alters = alters;
        //Prettyfier la date
        for (let alter in this.alters) {
          this.alters[alter].dateDebutContrat = this.prettyDateService.getPrettyDate(
            this.alters[alter].dateDebutContrat
          );
          this.alters[alter].dateFinContrat = this.prettyDateService.getPrettyDate(
            this.alters[alter].dateFinContrat
          );
        }
      }
    );
    this.altersService.emitAlter();
  }

  onNewAlter() {
    this.router.navigate(["/alter", "new"]);
  }

  onDeleteAlter(alter: AlterModel) {
    this.altersService.removeAlter(alter);
  }

  onViewAlter(id: number) {
    this.router.navigate(["/alter", "view", id]);
  }

  ngOnDestroy() {
    this.altersSubscription.unsubscribe();
  }
}
