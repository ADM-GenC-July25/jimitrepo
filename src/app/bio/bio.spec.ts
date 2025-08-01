import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioComponent } from './bio';

describe('Bio', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});