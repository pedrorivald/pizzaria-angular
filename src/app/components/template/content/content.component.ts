import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bebida } from './bebida.model';
import { Pizza } from './pizza.model';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pizzasArray: Pizza[] | undefined;
  bebidasArray: Bebida[] | undefined;
  

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas() {
    this.produtosService.getProdutos().subscribe(data => {
      this.pizzasArray = data.pizzas;
      this.bebidasArray = data.bebidas;
    });
  }
}
