import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categorias.service';
import { Categoria } from '../../interfaces/Categorias';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
})
export class CategoriaListComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }
}
