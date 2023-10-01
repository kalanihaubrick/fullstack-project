import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceitasListComponent } from 'src/app/components/receitas/receitas-list/receitas-list.component';
import { Receitas } from 'src/app/models/receitas.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  pegarTodasReceitas(): Observable<Receitas[]> {
    return this.http.get<Receitas[]>(this.baseApiUrl + '/api/Receitas/Todas')
  }

  addReceita(addReceitaRequest: Receitas): Observable<Receitas> {
    addReceitaRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Receitas>(this.baseApiUrl + '/api/Receitas', addReceitaRequest)
  }

  pegarReceita(id: string): Observable<Receitas> {
    return this.http.get<Receitas>(this.baseApiUrl + '/api/Receitas/' + id)

  }

  pegarReceitasFiltradas(descricao?: string, valor?: number, dataInicio?: Date, dataFim?: Date): Observable<Receitas[]> {
    let params = new HttpParams();

    if (descricao) {
      params = params.set('descricao', descricao)
    }

    if (valor) {
      params = params.set('valor', valor)
    }

    if (dataInicio) {
      params = params.set('dataInicio', dataInicio.toString())
    }

    if (dataFim) {
      params = params.set('dataFim', dataFim.toString())
    }

    return this.http.get<Receitas[]>(`${this.baseApiUrl}/api/Receitas/Consultar`, { params })

  }
}
