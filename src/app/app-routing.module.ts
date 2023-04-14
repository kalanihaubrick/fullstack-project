import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasListComponent } from './components/receitas/receitas-list/receitas-list.component';
import { DespesasListComponent } from './components/despesas/despesas-list/despesas-list.component';

const routes: Routes = [
  {
    path: 'receitas',
    component: ReceitasListComponent
  },
  {
    path: 'despesas',
    component: DespesasListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
