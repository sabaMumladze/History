import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NIV3001Component } from './niv-300-1.component';

describe('NIV3001Component', () => {
  let component: NIV3001Component;
  let fixture: ComponentFixture<NIV3001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NIV3001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NIV3001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
