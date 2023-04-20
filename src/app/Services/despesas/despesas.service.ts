import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Despesas[]>(this.baseApiUrl + '/api/despesas')
  }

  addDespesa(addDespesaRequest: Despesas): Observable<Despesas> {
    addDespesaRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Despesas>(this.baseApiUrl + '/api/despesas', addDespesaRequest)
  }
}
