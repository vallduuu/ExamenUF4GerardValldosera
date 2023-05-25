import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciGerardValldoseraComponent } from './inici-gerard-valldosera.component';

describe('IniciGerardValldoseraComponent', () => {
  let component: IniciGerardValldoseraComponent;
  let fixture: ComponentFixture<IniciGerardValldoseraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciGerardValldoseraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciGerardValldoseraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
