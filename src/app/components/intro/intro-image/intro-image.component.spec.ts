import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroImageComponent } from './intro-image.component';

describe('IntroImageComponent', () => {
  let component: IntroImageComponent;
  let fixture: ComponentFixture<IntroImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
