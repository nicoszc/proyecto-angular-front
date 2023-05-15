import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCuatrocientoscuatroComponent } from './pagina-cuatrocientoscuatro.component';

describe('PaginaCuatrocientoscuatroComponent', () => {
  let component: PaginaCuatrocientoscuatroComponent;
  let fixture: ComponentFixture<PaginaCuatrocientoscuatroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCuatrocientoscuatroComponent]
    });
    fixture = TestBed.createComponent(PaginaCuatrocientoscuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
