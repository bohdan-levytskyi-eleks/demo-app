import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiledComponent } from './chiled.component';

describe('ChiledComponent', () => {
  let component: ChiledComponent;
  let fixture: ComponentFixture<ChiledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiledComponent]
    });
    fixture = TestBed.createComponent(ChiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
