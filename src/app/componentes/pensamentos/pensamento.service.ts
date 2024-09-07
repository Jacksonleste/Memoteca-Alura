import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  getPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  cadastrarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  excluirPensamento(id: string): Observable<Pensamento> {
    const api = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(api);
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const api = `${this.API}/${id}`;
    return this.http.get<Pensamento>(api);
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    const api = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(api, pensamento);
  }
}
