import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/Services/despesas/despesas.service';
import { Despesas } from 'src/app/models/despesas.model';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.css']
})
export class DespesasListComponent implements OnInit {
  despesas: Despesas[] = []
  constructor(private despesasServices: DespesasService) { }

  ngOnInit(): void {
    this.despesasServices.pegarTodasDespesas()
    .subscribe({
      next: (despesas) => {
        this.despesas = despesas;
      },
      error: (response) => {
        console.log(response);
      }
    }) 
  }

}
