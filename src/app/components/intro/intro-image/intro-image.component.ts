import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'rs-intro-image',
  templateUrl: './intro-image.component.html',
  styleUrls: ['./intro-image.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ 'opacity': '1' })),
      state('out', style({ 'opacity': '0' })),
      transition('* <=> *', [
        animate(3000)
      ])
    ])
  ]
})
export class IntroImageComponent implements OnInit {

  imgSrcs: string[] = ['maat', 'river', 'avenue'];
  imgSrcCounter: number = 0;
  currentImg: string;
  sanitizedImage: any;

  state = 'in';

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.currentImg = `url(../../../assets/images/intro/${this.imgSrcs[this.imgSrcCounter]}.jpg) no-repeat top center/cover`;
    this.sanitizedImage = this._sanitizer.bypassSecurityTrustStyle(this.currentImg);
  }

  onDone($event: any) {
    if (this.imgSrcCounter === 2) {
      this.imgSrcCounter = 0;
    }
    else {
      this.imgSrcCounter++;
    }
    if (this.state === 'in') {
      setTimeout(() => {
        this.toggleState();
      }, 3000);
    }
    else {
      this.toggleState();
    }
  }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
    if (this.state === 'out') {
      setTimeout(() => {
        this.currentImg = `url(../../../assets/images/intro/${this.imgSrcs[this.imgSrcCounter]}.jpg) no-repeat top center/cover`;
        this.sanitizedImage = this._sanitizer.bypassSecurityTrustStyle(this.currentImg);
      }, 3000)
    }
  }
}
