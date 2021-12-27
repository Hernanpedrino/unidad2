import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos:any = [];
  constructor(private apiCall: ApiCallsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(){
    try {
      const data = await this.apiCall.getProducts();
      if (data) {
        this.productos = data['results'];
        console.log(this.productos);
        
      }
    } catch (error) {
      
      console.log(error);
      
    }
  }
}
