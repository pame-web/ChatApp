// grupo-uno.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-grupo-uno',
  templateUrl: './grupo-uno.page.html',
  styleUrls: ['./grupo-uno.page.scss'],
})
export class GrupoUnoPage {
  messages: { content: string, sender: string }[] = [];
  newMessage: string = '';

  constructor() { }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ content: this.newMessage, sender: 'Usuario' });
      this.newMessage = ''; // Limpiar el campo después de enviar
    }
  }
}
