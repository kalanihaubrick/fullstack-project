import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindReceitasComponent } from './find-receitas.component';

describe('FindReceitasComponent', () => {
  let component: FindReceitasComponent;
  let fixture: ComponentFixture<FindReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
