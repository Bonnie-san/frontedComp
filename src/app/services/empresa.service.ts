import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmpresaSaervice {

  constructor(private httpClient:HttpClient) { }

  public añadirEmpresa(empresa:any){
    return this.httpClient.post(`${baserUrl}/api/empresa`,empresa)
  }
}
