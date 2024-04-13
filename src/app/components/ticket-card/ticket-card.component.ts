import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css',
  providers: [MessageService]
})
export class TicketCardComponent {

  constructor(private renderer: Renderer2,private messageService: MessageService) { }
  // copy function
  copyTextToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // Optional: Show a success message or perform any other action after copying
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Text copied to clipboard' });
  }

}
