import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidoURI: string = '';
  formularioURI: string = '';

  constructor() { }

  msgWhatsapp(): void {
    window.open(`https://api.whatsapp.com/send?phone=5585996455918&text=${this.formularioURI}${this.pedidoURI}`);
  }
}
