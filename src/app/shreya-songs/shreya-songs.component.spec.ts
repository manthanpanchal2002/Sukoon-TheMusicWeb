import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShreyaSongsComponent } from './shreya-songs.component';

describe('ShreyaSongsComponent', () => {
  let component: ShreyaSongsComponent;
  let fixture: ComponentFixture<ShreyaSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShreyaSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShreyaSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
