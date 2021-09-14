import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseURL="http://localhost:8080/api/v1/produtos"

  constructor(private httpClient : HttpClient) { }

  getProdutosList(): Observable<Produto[]>
  {
    return this.httpClient.get<Produto[]>(`${this.baseURL}`);
  }
  createProduto(produto : Produto): Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`, produto);
  }
  getProdutoById(id:number): Observable<Produto>
  {
    return this.httpClient.get<Produto>(`${this.baseURL}/${id}`)
  }
  updateProduto(id: number,produto: Produto): Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`,produto);
  }
  deleteProduto(id: number): Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
