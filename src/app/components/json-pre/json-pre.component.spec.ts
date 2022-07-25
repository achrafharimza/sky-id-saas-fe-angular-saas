import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPreComponent } from './json-pre.component';

describe('JsonPreComponent', () => {
  let component: JsonPreComponent;
  let fixture: ComponentFixture<JsonPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
