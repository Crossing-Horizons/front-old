import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityPanelComponent } from './entity-panel.component';

describe('EntityPanelComponent', () => {
  let component: EntityPanelComponent;
  let fixture: ComponentFixture<EntityPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
