import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/Services/despesas/despesas.service';
import { Despesas } from 'src/app/models/despesas.model';
import { Filtro } from 'src/app/models/filtro.model';


@Component({
  selector: 'app-find-despesas',
  templateUrl: './find-despesas.component.html',
  styleUrls: ['./find-despesas.component.css']
})
export class FindDespesasComponent {
  filtro: Filtro = new Filtro();
  despesasFiltradas: Despesas[] = [];

  constructor(private despesasServices: DespesasService) { }

  aplicarFiltro() {
    this.despesasServices
      .pegarDespesasFiltradas(
        this.filtro.categoria,
        this.filtro.descricao,
        this.filtro.valor,
        this.filtro.dataInicio,
        this.filtro.dataFim
      )
      .subscribe({
        next: (despesasFiltradas) => {
          this.despesasFiltradas = despesasFiltradas;
        },
        error: (response) => {
            console.log(response)
        },
      })
  }
}
