import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }


  public listProducts : Array<any>|any=[];
  public listProductsFiltred : Array<any>|any=[];
  public listSousCommand : Array<any>|any=[];

  public totalPrix(){
    var prixTotal=0;
    this.listSousCommand.forEach((element: {prix: number; quantity: number;}) => {
      prixTotal = element.prix*element.quantity + prixTotal;
    });
    return prixTotal;
  }

}
