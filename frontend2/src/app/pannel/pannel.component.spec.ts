import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelComponent } from './pannel.component';

describe('PannelComponent', () => {
  let component: PannelComponent;
  let fixture: ComponentFixture<PannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PannelComponent]
    });
    fixture = TestBed.createComponent(PannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
