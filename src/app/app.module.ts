import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitasListComponent } from './components/receitas/receitas-list/receitas-list.component';
import { DespesasListComponent } from './components/despesas/despesas-list/despesas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddReceitaComponent } from './components/receitas/add-receita/add-receita.component';
import { AddDespesasComponent } from './components/despesas/add-despesas/add-despesas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReceitasListComponent,
    DespesasListComponent,
    AddReceitaComponent,
    AddDespesasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
