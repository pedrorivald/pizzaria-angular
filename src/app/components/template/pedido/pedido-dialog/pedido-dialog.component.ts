import { Component, OnInit } from '@angular/core';
import { PedidoFormComponent } from '../pedido-form/pedido-form.component';
import {MatDialog} from '@angular/material/dialog';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-dialog',
  templateUrl: './pedido-dialog.component.html',
  styleUrls: ['./pedido-dialog.component.css']
})
export class PedidoDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private pedidoService: PedidoService) { }

  transactions = this.pedidoService.transactions;

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['item', 'price', 'action'];

  getTotalPrice() {
    return this.transactions.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  openPedidoForm(): void{
    const dialogRef = this.dialog.open(PedidoFormComponent);
    let pedido = '*Pedido:*\n';

    dialogRef.afterClosed().subscribe(result => {});

    this.transactions.forEach(obj => {
      pedido += `*${obj.item}* -> R$${obj.price}\n`;
    });

    pedido += `*Total:* R$${this.getTotalPrice()}`;

    let pedidoURI = encodeURIComponent(pedido);

    this.pedidoService.pedidoURI = pedidoURI;
  }

  removerItem(num: number) {
    this.pedidoService.transactions.splice(num, 1);
  }

  removerPedido() {
    this.pedidoService.transactions = [];
  }

}
