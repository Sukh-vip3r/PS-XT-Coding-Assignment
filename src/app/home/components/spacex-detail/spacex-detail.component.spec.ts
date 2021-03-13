import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexDetailComponent } from './spacex-detail.component';

describe('SpacexDetailComponent', () => {
  let component: SpacexDetailComponent;
  let fixture: ComponentFixture<SpacexDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
