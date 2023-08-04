import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  constructor(private httpClient:HttpClient) { }

  public añadirEnvio(envios:any){
    return this.httpClient.post(`${baserUrl}/api/envios`,envios)
  }
}
