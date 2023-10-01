import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasListComponent } from './components/receitas/receitas-list/receitas-list.component';
import { DespesasListComponent } from './components/despesas/despesas-list/despesas-list.component';
import { AddReceitaComponent } from './components/receitas/add-receita/add-receita.component';
import { AddDespesasComponent } from './components/despesas/add-despesas/add-despesas.component';
import { EditReceitaComponent } from './components/receitas/edit-receita/edit-receita.component';
import { EditDespesaComponent } from './components/despesas/edit-despesa/edit-despesa.component';
import { FindDespesasComponent } from './components/despesas/find-despesas/find-despesas.component';
import { FindReceitasComponent } from './components/receitas/find-receitas/find-receitas.component';

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
  },
  {
    path: 'despesas/buscar',
    component: FindDespesasComponent
  },
  {
    path: 'receitas/buscar',
    component: FindReceitasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
