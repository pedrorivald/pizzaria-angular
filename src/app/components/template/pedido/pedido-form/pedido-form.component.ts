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
    let nomeEncode = encodeURIComponent(this.nome);
    let bairroEncode = encodeURIComponent(this.bairro);
    let ruaEncode = encodeURIComponent(this.rua);
    let numeroEncode = encodeURIComponent(this.numero);
    let complementoEncode = encodeURIComponent(this.complemento);
    let trocoEncode = encodeURIComponent(this.troco);

    let texto = `Nome:%20${nomeEncode}%2C
    Bairro:%20${bairroEncode}%2C
    Rua:%20${ruaEncode}%2C
    Número:%20${numeroEncode}%2C
    Complemento:%20${complementoEncode}%2C
    Troco%20para:%20${trocoEncode}`;
    
    window.location.href = `https://api.whatsapp.com/send?phone=5585996455918&text=${texto}`;
  }
}
