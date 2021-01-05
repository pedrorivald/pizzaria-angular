import { Component, OnInit } from '@angular/core';
import { PedidoFormComponent } from '../pedido-form/pedido-form.component';
import {MatDialog} from '@angular/material/dialog';

export interface Transaction {
  item: string;
  price: number;
}


@Component({
  selector: 'app-pedido-dialog',
  templateUrl: './pedido-dialog.component.html',
  styleUrls: ['./pedido-dialog.component.css']
})
export class PedidoDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['item', 'price', 'action'];
  transactions: Transaction[] = [
    {item: 'Calabresa', price: 29.90},
    {item: 'Portuguesa', price: 24.50},
    {item: 'Coca-Cola', price: 4.90},
    {item: 'Mista', price: 22.90},
    {item: 'Guaraná', price: 4.90},
  ];

  getTotalPrice() {
    return this.transactions.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  openPedidoForm() {
    const dialogRef = this.dialog.open(PedidoFormComponent);

    dialogRef.afterClosed().subscribe(result => {});
  }

}
