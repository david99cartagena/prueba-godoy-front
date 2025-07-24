import { Component, OnInit } from '@angular/core';
import { CatFactResponse } from 'src/models/fact.model';
import { GifResponse } from 'src/models/gif.model';
import { SearchHistoryDto } from 'src/models/searchHistoryDto';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  activeTab: 'actual' | 'historial' = 'actual';

  catFact: string = '';
  gifUrl: string = '';
  historial: SearchHistoryDto[] = [];

  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.obtenerCatFactYGif();
    this.obtenerHistorial();
  }

  obtenerCatFactYGif() {
    this.isLoading = true;
    this.errorMessage = '';

    this.searchService.obtenerFact().subscribe({
      next: (factData: CatFactResponse) => {
        this.catFact = factData.factCompleto;

        this.searchService.obtenerGif(this.catFact).subscribe({
          next: (gifData: GifResponse) => {
            this.gifUrl = gifData.gifUrl;
            this.isLoading = false;
          },
          error: (err) => {
            this.errorMessage = 'Error al obtener el gif';
            this.isLoading = false;
          },
        });
      },
      error: (err) => {
        this.errorMessage = 'Error al obtener el fact';
        this.isLoading = false;
      },
    });
  }

  refreshGif() {
    this.isLoading = true;
    this.errorMessage = '';
    this.searchService.obtenerGif(this.catFact).subscribe({
      next: (gifData: GifResponse) => {
        this.gifUrl = gifData.gifUrl;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al actualizar el gif';
        this.isLoading = false;
      },
    });
  }

  obtenerHistorial() {
    this.searchService.obtenerHistorial().subscribe({
      next: (data) => {
        this.historial = data;
      },
      error: (err) => {
        console.error('Error al cargar historial:', err);
      },
    });
  }
}
