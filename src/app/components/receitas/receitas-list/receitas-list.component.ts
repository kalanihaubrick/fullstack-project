import { Component, OnInit } from '@angular/core';
import { Receitas } from 'src/app/models/receitas.model';

@Component({
  selector: 'app-receitas-list',
  templateUrl: './receitas-list.component.html',
  styleUrls: ['./receitas-list.component.css']
})
export class ReceitasListComponent implements OnInit {
  receitas: Receitas[] = [
    {
      id: 1,
    descricao: 'Salario',
    valor: 4090,
    data: '2023-04-01'   
    },
    {
      id: 2,
    descricao: 'Venda Moto',
    valor: 10000,
    data: '2023-04-13'   
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
