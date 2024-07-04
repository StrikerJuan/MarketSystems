import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCatalogoComponent } from './articulo-catalogo.component';

describe('ArticuloCatalogoComponent', () => {
  let component: ArticuloCatalogoComponent;
  let fixture: ComponentFixture<ArticuloCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticuloCatalogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticuloCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
