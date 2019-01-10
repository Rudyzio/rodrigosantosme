import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollSpyService } from 'src/app/services/scroll-spy/scroll-spy.service';

@Component({
  selector: 'rs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() mobileQuery: MediaQueryList;

  subscription: Subscription;

  scrollString: string = '';

  constructor(private scrollSpyService: ScrollSpyService) { }

  ngOnInit() {
    this.subscription = this.scrollSpyService.scrollChanged.subscribe((elementId: string) => {
      this.scrollString = elementId;
    })
  }

  onNavbarBtnClick(destination: string) {
    const element = document.querySelector(destination);
    if (element) {
      this.scrollString = destination.substr(1);
      this.scrollSpyService.blockSpyScroll();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
