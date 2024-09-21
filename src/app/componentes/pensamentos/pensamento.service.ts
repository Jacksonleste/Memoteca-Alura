import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listarPensamentos(
    pagina: number,
    filtro: string = '',
    favoritos: boolean = false
  ): Observable<Pensamento[]> {
    const limitePagina = 9;

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', limitePagina);
    if (filtro.trim().length > 2) {
      console.log(filtro);
      params = params.set('q', filtro);
    }

    if (favoritos) {
      params = params.set('favorito', true);
    }

    return this.http.get<Pensamento[]>(this.API, { params });
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

  alternarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    const api = `${this.API}/${pensamento.id}`;
    pensamento.favorito = !pensamento.favorito;
    return this.http.put<Pensamento>(api, pensamento);
  }
}
