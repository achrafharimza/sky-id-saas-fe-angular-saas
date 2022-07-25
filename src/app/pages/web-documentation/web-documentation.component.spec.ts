import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDocumentationComponent } from './web-documentation.component';

describe('WebDocumentationComponent', () => {
  let component: WebDocumentationComponent;
  let fixture: ComponentFixture<WebDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
