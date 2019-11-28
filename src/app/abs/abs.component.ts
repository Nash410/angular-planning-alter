import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent implements OnInit {

  @Input() alterId: number;

  constructor() {}

  ngOnInit() {
  }

}