import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AafiSongsComponent } from './aafi-songs.component';

describe('AafiSongsComponent', () => {
  let component: AafiSongsComponent;
  let fixture: ComponentFixture<AafiSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AafiSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AafiSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
