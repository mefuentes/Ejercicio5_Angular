import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreItemComponent } from './components/nombre-item/nombre-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NombreItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio5';

  nombres: string[] = ['Enzo', 'Vicente', 'Ariel'];
}
