import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  isChecked: boolean = true;
  @Output() sortTicketNumber = new EventEmitter<void>();

 
}
