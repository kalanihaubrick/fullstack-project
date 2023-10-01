import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/Services/receitas/receitas.service';
import { Receitas } from 'src/app/models/receitas.model';

@Component({
  selector: 'app-receitas-list',
  templateUrl: './receitas-list.component.html',
  styleUrls: ['./receitas-list.component.css']
})
export class ReceitasListComponent implements OnInit {
  receitas: Receitas[] = [];
  constructor(private receitasServices: ReceitasService) { }

  ngOnInit(): void {
    this.receitasServices.pegarTodasReceitas()
      .subscribe({
        next: (receitas) => {
          this.receitas = receitas;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
