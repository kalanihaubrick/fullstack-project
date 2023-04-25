import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DespesasService } from 'src/app/Services/despesas/despesas.service';
import { Despesas } from 'src/app/models/despesas.model';

@Component({
  selector: 'app-edit-despesa',
  templateUrl: './edit-despesa.component.html',
  styleUrls: ['./edit-despesa.component.css']
})
export class EditDespesaComponent implements OnInit{

  despesaDetalhe: Despesas = {
    id: '',
    descricao: '',
    valor: 0,
    data: '',
    categoria: ''
  }

constructor(private route: ActivatedRoute, private despesasService: DespesasService) { }

ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        if (id) {
          this.despesasService.pegarDespesa(id)
          .subscribe({
            next: (response) => {
              this.despesaDetalhe = response;
            }
          })
        }
      }
    })
}

}
