import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private httpClient:HttpClient) { }

  public añadirCotizacion(cotizacion:any){
    return this.httpClient.post(`${baserUrl}/api/cotizacion`,cotizacion)
  }
}
