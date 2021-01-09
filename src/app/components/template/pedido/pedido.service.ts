import { Injectable } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface Transaction {
  item: string;
  price: number;
  num: number;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidoURI: string = '';
  formularioURI: string = '';

  transactions: Transaction[] = [];

  constructor(private _snackBar: MatSnackBar) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'X', {
      duration: 700,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  getPedidoValues(item: string, price: number) {
    this.transactions.push({item: item, price: price, num: this.transactions.length});
  }

}
