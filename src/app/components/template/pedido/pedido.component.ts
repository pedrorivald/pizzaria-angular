import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PedidoDialogComponent } from './pedido-dialog/pedido-dialog.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  constructor(public dialog: MatDialog) {}

  openPedido() {
    const dialogRef = this.dialog.open(PedidoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}