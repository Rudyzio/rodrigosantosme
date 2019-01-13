import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rs-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent implements OnInit {
  @Input() flag: string;
  @Input() language: string;
  @Input() stars: number;

  constructor() { }

  ngOnInit() {
  }

}
