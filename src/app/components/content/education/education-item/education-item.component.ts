import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() educationLogo: string;
  @Input() educationName: string;
  @Input() educationDegree: string;
  @Input() educationBody: string;
  @Input() educationFooter: string;

  constructor() { }

  ngOnInit() {
  }

}
