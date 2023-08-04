import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EnviosporreferenciaService {

  constructor(private httpClient:HttpClient) { }

  public añadirEnviosporreferencia(enviosporreferencia:any){
    return this.httpClient.post(`${baserUrl}/api/enviosreferencias`,enviosporreferencia)
  }
}
