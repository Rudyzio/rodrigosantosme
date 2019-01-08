import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() name: string;
  @Input() value: number;

  valueString: string;

  constructor() { }

  ngOnInit() {
    this.setValueString();
  }

  setValueString() {
    if (this.value >= 80) {
      this.valueString = "Advanced";
      return;
    }
    if (this.value >= 60) {
      this.valueString = "Intermediate";
      return;
    }
    this.valueString = "Beginner";
  }

}
