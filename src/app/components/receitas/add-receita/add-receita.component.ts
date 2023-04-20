import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/Services/receitas/receitas.service';
import { Receitas } from 'src/app/models/receitas.model';

@Component({
  selector: 'app-add-receita',
  templateUrl: './add-receita.component.html',
  styleUrls: ['./add-receita.component.css']
})
export class AddReceitaComponent implements OnInit {
  addReceitaRequest: Receitas = {
    id: '',
    descricao: '',
    valor: 0,
    data: ''
  };

  constructor(private receitasService: ReceitasService) {}

  ngOnInit(): void {
      
  }

  addReceita() {
    this.receitasService.addReceita(this.addReceitaRequest)
    .subscribe({
      next: (receita) => {
        console.log(receita);
      },
      error: (reponse) => {
        console.log(reponse);
      }
    })
  }

}
