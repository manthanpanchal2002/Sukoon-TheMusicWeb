import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldUserPageComponent } from './old-user-page.component';

describe('OldUserPageComponent', () => {
  let component: OldUserPageComponent;
  let fixture: ComponentFixture<OldUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
