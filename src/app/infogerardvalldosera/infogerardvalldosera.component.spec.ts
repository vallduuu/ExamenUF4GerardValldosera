import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfogerardvalldoseraComponent } from './infogerardvalldosera.component';

describe('InfogerardvalldoseraComponent', () => {
  let component: InfogerardvalldoseraComponent;
  let fixture: ComponentFixture<InfogerardvalldoseraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfogerardvalldoseraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfogerardvalldoseraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
