import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando: boolean = true;

  constructor(private http: Http) {

    this.cargar_producto();

  }

  public cargar_producto() {

    this.cargando = true;

    this.http.get('https://hd2golf-5bc44.firebaseio.com/productos_idx.json')
      .subscribe(res => {

        //console.log(res.json());
        this.cargando = false;
        this.productos = res.json();
      })

  }

}
