import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFotografiasComponent } from './contenedor-fotografias.component';

describe('ContenedorFotografiasComponent', () => {
  let component: ContenedorFotografiasComponent;
  let fixture: ComponentFixture<ContenedorFotografiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorFotografiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorFotografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
