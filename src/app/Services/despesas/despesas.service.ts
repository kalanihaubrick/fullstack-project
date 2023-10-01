import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesas } from 'src/app/models/despesas.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {
  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  pegarTodasDespesas(): Observable<Despesas[]> {
    return this.http.get<Despesas[]>(this.baseApiUrl + '/api/despesas/Todas')
  }

  addDespesa(addDespesaRequest: Despesas): Observable<Despesas> {
    addDespesaRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Despesas>(this.baseApiUrl + '/api/despesas', addDespesaRequest)
  }

  pegarDespesa(id: String): Observable<Despesas> {
    return this.http.get<Despesas>(`${this.baseApiUrl}/api/Despesas/${id}`)
  }

  pegarDespesasFiltradas(categoria?: string, descricao?: string, valor?: number, dataInicio?: Date, dataFim?: Date): Observable<Despesas[]> {
    let params = new HttpParams();

    if (categoria) {
      params = params.set('categoria', categoria);
    }

    if (descricao) {
      params = params.set('descricao', descricao);
    }

    if (valor) {
      params = params.set('valor', valor.toString());
    }

    if (dataInicio) {
      params = params.set('dataInicio', dataInicio.toString());
    }
    if (dataFim) {
      params = params.set('dataFim', dataFim.toString());
    }

    return this.http.get<Despesas[]>(`${this.baseApiUrl}/api/Despesas/Consultar`, { params })

  }
}
