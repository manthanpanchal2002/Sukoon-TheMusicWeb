import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhillonSongsComponent } from './dhillon-songs.component';

describe('DhillonSongsComponent', () => {
  let component: DhillonSongsComponent;
  let fixture: ComponentFixture<DhillonSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhillonSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhillonSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
