import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmbarqueService {

  constructor(private httpClient:HttpClient) { }

  public añadirEmbarque(embarque:any){
    return this.httpClient.post(`${baserUrl}/api/embarque`,embarque)
  }
}
