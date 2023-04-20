import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/Services/despesas/despesas.service';
import { Despesas } from 'src/app/models/despesas.model';

@Component({
  selector: 'app-add-despesas',
  templateUrl: './add-despesas.component.html',
  styleUrls: ['./add-despesas.component.css']
})
export class AddDespesasComponent implements OnInit {
  addDespesaRequest: Despesas = {
    id: '',
    descricao: '',
    valor: 0,
    data: '',
    categoria: ''
  };

  constructor(private despesasService: DespesasService) {}

  ngOnInit(): void {
      
  }

  addDespesa(){
    this.despesasService.addDespesa(this.addDespesaRequest)
    .subscribe({
      next: (despesa) => {
        console.log(despesa)
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
