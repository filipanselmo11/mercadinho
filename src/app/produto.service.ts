import { Injectable } from '@angular/core';
import { ProdutoInterface } from './produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  baseURL = 'http://localhost:3000/produtos';

  constructor() {}

  async getAllProdutos(): Promise<ProdutoInterface[]> {
    const data = await fetch(this.baseURL);
    return await data.json() ?? [];
  }
}
