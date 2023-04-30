import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElleySongsComponent } from './elley-songs.component';

describe('ElleySongsComponent', () => {
  let component: ElleySongsComponent;
  let fixture: ComponentFixture<ElleySongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElleySongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElleySongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
