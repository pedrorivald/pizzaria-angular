import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'https://script.google.com/macros/s/AKfycbz4bzrd6iGG8G9J1hTsvsjDk850Rpe97iQk9ciMk2-mTdRoENJO/exec';

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto>{
    return this.http.get<Produto>(this.API);
  }
    
}