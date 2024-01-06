import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ProdutoInterface } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  produtoList: ProdutoInterface[] = [];
  produtoService: ProdutoService = inject(ProdutoService);
  filteredProduto: ProdutoInterface[] = [];

  constructor() {
    this.produtoService
      .getAllProdutos()
      .then((produtoList: ProdutoInterface[]) => {
        this.produtoList = produtoList;
        this.filteredProduto = produtoList;
      });
  }

  filtrarResultados(text: string) {
    if (!text) {
      this.filteredProduto = this.produtoList;
      return;
    }

    this.filteredProduto = this.produtoList.filter((produto) => {
      produto?.nome.toLowerCase().includes(text.toLowerCase());
    });
  }
}
