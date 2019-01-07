import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rs-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    
  }

  onIntroButtonClick() {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  

  
}
