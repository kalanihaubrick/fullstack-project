import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDespesasComponent } from './find-despesas.component';

describe('FindDespesasComponent', () => {
  let component: FindDespesasComponent;
  let fixture: ComponentFixture<FindDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDespesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
