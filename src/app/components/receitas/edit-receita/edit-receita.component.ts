import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitasService } from 'src/app/Services/receitas/receitas.service';
import { Receitas } from 'src/app/models/receitas.model';

@Component({
  selector: 'app-edit-receita',
  templateUrl: './edit-receita.component.html',
  styleUrls: ['./edit-receita.component.css']
})
export class EditReceitaComponent implements OnInit {

  receitaDetalhes: Receitas = {
    id: '',
    descricao: '',
    valor: 0,
    data: ''
  }

  constructor(private route: ActivatedRoute, private receitasServices: ReceitasService) { }

  ngOnInit(): void {
this.route.paramMap.subscribe({
  next: (params) => {
   const id = params.get('id');

   if (id) {
    this.receitasServices.pegarReceita(id)
    .subscribe({
      next: (response) => {
        this.receitaDetalhes = response;
      }
    })
   }
  }
})
  }
}
