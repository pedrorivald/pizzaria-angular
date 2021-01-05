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
    let texto = `*Nome:* ${this.nome};\n*Bairro:* ${this.bairro};\n*Rua:* ${this.rua};\n*Número:* ${this.numero};\n*Complemento:* ${this.complemento};\n*Troco para:* ${this.troco}\n\n`;
    let textoURI = encodeURIComponent(texto);

    this.pedidoService.formularioURI = textoURI;

    this.pedidoService.msgWhatsapp();
  }
}
