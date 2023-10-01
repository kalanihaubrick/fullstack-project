import { Component, OnInit } from '@angular/core';
import { Receitas } from 'src/app/models/receitas.model';
import { Filtro } from 'src/app/models/filtro.model';
import { ReceitasService } from 'src/app/Services/receitas/receitas.service';

@Component({
  selector: 'app-find-receitas',
  templateUrl: './find-receitas.component.html',
  styleUrls: ['./find-receitas.component.css']
})
export class FindReceitasComponent {
  constructor(private receitasServices: ReceitasService) { }
filtro: Filtro = new Filtro();
receitasFiltradas: Receitas[] = [];

aplicarFiltro() {
  this.receitasServices
  .pegarReceitasFiltradas(
    this.filtro.descricao,
    this.filtro.valor,
    this.filtro.dataInicio,
    this.filtro.dataFim
  )
  .subscribe({
    next: (receitasFiltradas) => {
      this.receitasFiltradas= receitasFiltradas;  
    },
    error: (response) => {
      console.log(response);
    }
  })
}

}
