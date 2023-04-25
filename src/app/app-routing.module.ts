import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasListComponent } from './components/receitas/receitas-list/receitas-list.component';
import { DespesasListComponent } from './components/despesas/despesas-list/despesas-list.component';
import { AddReceitaComponent } from './components/receitas/add-receita/add-receita.component';
import { AddDespesasComponent } from './components/despesas/add-despesas/add-despesas.component';
import { EditReceitaComponent } from './components/receitas/edit-receita/edit-receita.component';
import { EditDespesaComponent } from './components/despesas/edit-despesa/edit-despesa.component';

const routes: Routes = [
  {
    path: 'receitas',
    component: ReceitasListComponent
  },
  {
    path: 'despesas',
    component: DespesasListComponent
  },
  {
    path: 'receitas/criar',
    component: AddReceitaComponent
  },
  {
    path: 'despesas/criar',
    component: AddDespesasComponent
  },
  {
    path: 'receitas/edit/:id',
    component: EditReceitaComponent
  },
  {
    path: 'despesas/edit/:id',
    component: EditDespesaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
