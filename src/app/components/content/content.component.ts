import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollSpyService } from 'src/app/services/scroll-spy/scroll-spy.service';

@Component({
  selector: 'rs-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  show = true;

  constructor(private scrollSpyService: ScrollSpyService) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let elements: any = document.querySelectorAll("#mainContent > div");
    let windowOffset = window.pageYOffset;
    for (let element of elements) {
      let offsetTop = element.offsetTop;
      let offsetBottom = element.offsetTop + element.offsetHeight;
      if (offsetTop <= windowOffset && offsetBottom >= windowOffset) {
        this.scrollSpyService.changeScrollSpy(element.id);
        break;
      }
    }
  }

}
