import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  today:Date;
  years: number[];
  months: string[];
  week: string[];

  constructor() {}

  ngOnInit() {
    this.today = new Date();
    this.months = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");
    this.week  = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"); 
    let currentYear = this.today.getFullYear();
    this.years = new Array(currentYear-1, currentYear, currentYear+1);
  }




}