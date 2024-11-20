import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nombre-item',
  standalone: true,
  imports: [],
  templateUrl: './nombre-item.component.html',
  styleUrl: './nombre-item.component.css'
})
export class NombreItemComponent {
    
   @Input() nombre = '';
}
