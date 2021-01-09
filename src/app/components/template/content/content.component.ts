import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Bebida } from './bebida.model';
import { Pizza } from './pizza.model';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pizzasArray: Pizza[] = [];
  bebidasArray: Bebida[] = [];

  constructor(private produtosService: ProdutosService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas() {
    this.produtosService.getProdutos().subscribe(data => {
      this.pizzasArray = data.pizzas;
      this.bebidasArray = data.bebidas;
    });
  }

  addPizzaPedido(id: number) {
    this.pizzasArray.forEach((value)=> {
      if(value.id === id){
        this.pedidoService.getPedidoValues(value.name, value.price);
        this.pedidoService.openSnackBar('Pizza adicionada!');
      }
    });
  }

  addBebidaPedido(id: number) {
    this.bebidasArray.forEach((value)=> {
      if(value.id === id){
        this.pedidoService.getPedidoValues(`${value.name} ${value.volume}`, value.price);
        this.pedidoService.openSnackBar('Bebida adicionada!');
      }
    });
  }
}

