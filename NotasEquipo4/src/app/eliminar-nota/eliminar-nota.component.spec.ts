import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarNotaComponent } from './eliminar-nota.component';

describe('EliminarNotaComponent', () => {
  let component: EliminarNotaComponent;
  let fixture: ComponentFixture<EliminarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
