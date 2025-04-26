/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let debug: DebugElement;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a <footer> element', () => {
    expect(debug.queryAll(By.css('footer'))).toHaveSize(1);
  });

  it('should contain the contact email and profile of social network', () => {
    const textFooter = debug.query(By.css('div.col.text-center.small'));
    expect(textFooter.nativeElement.textContent).toContain('Contact us: +57 3102105253');
    expect(textFooter.nativeElement.textContent).toContain('info@elaromamagico.com');
    expect(textFooter.nativeElement.textContent).toContain('@elaromamagico');
  });
});
