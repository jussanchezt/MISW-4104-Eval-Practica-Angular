import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CafeListComponent],
      providers: [CafeService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for (let i = 1; i <= 3; i++) {
      const cafe = new Cafe(
        i,
        faker.commerce.productName(),
        faker.lorem.word(),
        faker.location.city(),
        faker.lorem.word(),
        faker.number.int(),
        faker.internet.url()
      );
      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table element', () => {
    expect(debug.query(By.css('table'))).toBeTruthy();
  });

  it('should have a thead with class table-dark', () => {
    expect(debug.query(By.css('thead.table-dark'))).toBeTruthy();
  });

  it('should have 6 <tr> elements in tbody', () => {
    expect(debug.queryAll(By.css('tbody tr')).length).toBe(3);
  });

  it('should have 4 <th> elements in thead', () => {
    expect(debug.queryAll(By.css('thead th')).length).toBe(4);
  });

  it('should have the corresponding id each coffee', () => {
    debug.queryAll(By.css('tbody tr td:first-child')).forEach((coffee, i) => {
      expect(coffee.nativeElement.textContent.trim()).toBe(
        component.cafes[i].id.toString()
      );
    });
  });

  it('should count types of <<café>> dynamically', () => {
    const cafe = new Cafe(
      faker.number.int(),
      faker.commerce.productName(),
      component.cafes[0].tipo.toString(),
      faker.location.city(),
      faker.lorem.word(),
      faker.number.int(),
      faker.internet.url()
    );
    component.cafes.push(cafe);

    fixture.detectChanges();
    debug = fixture.debugElement;

    const counts = component.getCafeCounts();

    const existingType = component.cafes[0].tipo.toString();
    const typeCount = counts.find(
      (count) => count.tipo === existingType
    )?.count;

    expect(typeCount).toBe(2);
  });
});
