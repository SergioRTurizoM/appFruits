import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAppFruitsComponent } from './grid-app-fruits.component';

describe('GridAppFruitsComponent', () => {
  let component: GridAppFruitsComponent;
  let fixture: ComponentFixture<GridAppFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAppFruitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAppFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
