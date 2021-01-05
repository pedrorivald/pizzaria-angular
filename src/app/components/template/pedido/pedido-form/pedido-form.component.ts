import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
// import { Form } from './form.model';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  nome: string = '';
  numero: string = '';
  rua: string = '';
  bairro: string = '';
  complemento: string = '';
  troco: string = '';

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  concluirPedido(): void {
    console.log(`${this.nome}`);
    window.location.href = `https://api.whatsapp.com/send?phone=5585996455918&text=
                              Nome:%2C%20${this.nome},%2C%20
                              Bairro:%2C%20${this.bairro},%2C%20
                              Rua:%2C%20${this.rua},%2C%20
                              Número:%2C%20${this.numero},%2C%20
                              Complemento:%2C%20${this.complemento},%2C%20
                              Troco para:%2C%20${this.troco}
                            `;
  }
}
