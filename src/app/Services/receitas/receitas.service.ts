import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receitas } from 'src/app/models/receitas.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  pegarTodasReceitas(): Observable<Receitas[]> {
    return this.http.get<Receitas[]>(this.baseApiUrl + '/api/Receitas')
  }

  addReceita(addReceitaRequest: Receitas): Observable<Receitas> {
    addReceitaRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Receitas>(this.baseApiUrl + '/api/Receitas', addReceitaRequest)
  }
}
