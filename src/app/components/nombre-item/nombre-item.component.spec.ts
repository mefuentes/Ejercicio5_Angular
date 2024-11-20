import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreItemComponent } from './nombre-item.component';

describe('NombreItemComponent', () => {
  let component: NombreItemComponent;
  let fixture: ComponentFixture<NombreItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombreItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
