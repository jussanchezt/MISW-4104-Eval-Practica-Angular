import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
  standalone: false
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes.sort((a, b) => a.id - b.id);
    });
  }

  ngOnInit() {
    this.getCafes();
  }

  getCafeCounts(): { tipo: string, count: number }[] {
    const counts: { tipo: string, count: number }[] = [];
    this.cafes.forEach(cafe => {
      const tipo = cafe.tipo.includes('Café') ? cafe.tipo.replace('Café', '').trim() : cafe.tipo;
      const existingCount = counts.find(count => count.tipo === tipo);
      if (existingCount) {
        existingCount.count++;
      } else {
        counts.push({ tipo, count: 1 });
      }
    });
    return counts;
  }

}
