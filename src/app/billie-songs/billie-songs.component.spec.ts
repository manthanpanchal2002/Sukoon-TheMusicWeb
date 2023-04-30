import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillieSongsComponent } from './billie-songs.component';

describe('BillieSongsComponent', () => {
  let component: BillieSongsComponent;
  let fixture: ComponentFixture<BillieSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillieSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillieSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
