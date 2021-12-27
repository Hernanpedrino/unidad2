import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=20&id=MLA919232673").toPromise();
  }
}
