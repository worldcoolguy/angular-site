import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpscComponent } from './ipsc.component';

describe('IpscComponent', () => {
  let component: IpscComponent;
  let fixture: ComponentFixture<IpscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
