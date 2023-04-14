import { Component, OnInit } from '@angular/core';
import { Despesas } from 'src/app/models/despesas.model';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  styleUrls: ['./despesas-list.component.css']
})
export class DespesasListComponent implements OnInit {
  despesas: Despesas[] = [
    {
      id: 1,
      descricao: 'Mercado',
      valor: 650,
      data: '2023-04-01',
      categoria: 'Alimentação'
    },
    {
      id: 2,
      descricao: 'Luz',
      valor: 250.37,
      data: '2023-04-03',
      categoria: 'Moradia'
    },
    {
      id: 3,
      descricao: 'Gasolina',
      valor: 200,
      data: '2023-04-10',
      categoria: 'Transporte'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.despesas.push()
  }

}
