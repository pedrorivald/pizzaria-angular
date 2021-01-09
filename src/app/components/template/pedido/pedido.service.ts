import { Injectable } from '@angular/core';

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

  constructor() { }

  getPedidoValues(item: string, price: number) {
    this.transactions.push({item: item, price: price, num: this.transactions.length});
  }

}
