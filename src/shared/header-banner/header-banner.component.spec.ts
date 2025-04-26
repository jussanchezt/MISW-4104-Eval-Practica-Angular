import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderBannerComponent } from './header-banner.component';

describe('HeaderBannerComponent', () => {
  let component: HeaderBannerComponent;
  let debug: DebugElement;
  let fixture: ComponentFixture<HeaderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should display the correct title', () => {
    const titleElement: HTMLElement = debug.query(By.css('.header-title h1')).nativeElement;
    expect(titleElement.textContent).toContain('El aroma mágico');
  });

  it('should display the banner image with correct src and alt', () => {
    const imgElement: HTMLElement = debug.query(By.css('.header-banner img')).nativeElement;
    expect(imgElement.getAttribute('src')).toContain('assets/image1.png');
    expect(imgElement.getAttribute('alt')).toBe('Banner tienda de cafe');
  });

  it('should have two horizontal lines (hr)', () => {
    expect(debug.queryAll(By.css('hr')).length).toBe(2);
  });
});

