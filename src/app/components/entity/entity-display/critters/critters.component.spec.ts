import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrittersComponent } from './critters.component';

describe('CrittersComponent', () => {
  let component: CrittersComponent;
  let fixture: ComponentFixture<CrittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
