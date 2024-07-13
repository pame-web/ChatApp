import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrupoUnoPage } from './grupo-uno.page';

describe('GrupoUnoPage', () => {
  let component: GrupoUnoPage;
  let fixture: ComponentFixture<GrupoUnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
