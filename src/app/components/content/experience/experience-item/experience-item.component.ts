import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input() companyLogo: string;
  @Input() companyAddress: string;
  @Input() companyName: string;
  @Input() companyRole: string;
  @Input() bodyText: string;
  @Input() footerText: string;

  constructor() { }

  ngOnInit() {
  }

}
