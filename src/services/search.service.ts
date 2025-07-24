import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatFactResponse } from 'src/models/fact.model';
import { GifResponse } from 'src/models/gif.model';
import { SearchHistoryDto } from 'src/models/searchHistoryDto';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerFact(): Observable<CatFactResponse> {
    return this.http.get<CatFactResponse>(`${this.apiUrl}/fact`).pipe(
      catchError((err) => {
        console.error('Error al obtener fact:', err);
        return throwError(() => err);
      })
    );
  }

  obtenerGif(fact: string): Observable<GifResponse> {
    return this.http
      .get<GifResponse>(`${this.apiUrl}/gif?fact=${encodeURIComponent(fact)}`)
      .pipe(
        catchError((err) => {
          console.error('Error al obtener gif:', err);
          return throwError(() => err);
        })
      );
  }

  obtenerHistorial(): Observable<SearchHistoryDto[]> {
    return this.http.get<SearchHistoryDto[]>(`${this.apiUrl}/history`).pipe(
      catchError((err) => {
        console.error('Error al obtener historial:', err);
        return throwError(() => err);
      })
    );
  }
}
