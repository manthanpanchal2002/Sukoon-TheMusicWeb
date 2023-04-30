import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaanSongsComponent } from './armaan-songs.component';

describe('ArmaanSongsComponent', () => {
  let component: ArmaanSongsComponent;
  let fixture: ComponentFixture<ArmaanSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaanSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmaanSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
