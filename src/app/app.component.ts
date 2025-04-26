import { Component } from '@angular/core';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MISW-4104-Eval-Practica-Angular';
}
