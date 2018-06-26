import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueFacoComponent } from './que-faco.component';

describe('QueFacoComponent', () => {
  let component: QueFacoComponent;
  let fixture: ComponentFixture<QueFacoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueFacoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueFacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
