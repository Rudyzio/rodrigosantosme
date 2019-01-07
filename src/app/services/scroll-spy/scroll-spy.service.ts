import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {

  scrollChanged = new Subject<any>();
  private currentElement: string;
  private blockScroll: boolean = true;

  constructor() { }

  changeScrollSpy(elementId: string) {
    if (this.blockScroll && this.currentElement !== elementId) {
      this.currentElement = elementId;
      this.scrollChanged.next(elementId);
    }
  }

  blockSpyScroll() {
    this.blockScroll = false;
    setTimeout(() => {
      this.blockScroll = true;
    }, 3000);
  }
}
