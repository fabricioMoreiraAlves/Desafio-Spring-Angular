import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSerchComponent } from './produto-serch.component';

describe('ProdutoSerchComponent', () => {
  let component: ProdutoSerchComponent;
  let fixture: ComponentFixture<ProdutoSerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoSerchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
