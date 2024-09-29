import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-article-vue',
  templateUrl: './article-vue.component.html',
  styleUrl: './article-vue.component.css'
})
export class ArticleVueComponent {

  constructor( public storeService:StoreService){}

  @Input()
  public product: any;

  ngOnInit(): void {
  }

  public addArticle(product: any){
    if(this.storeService.listSousCommand.filter((objet: {id: any; any: any }) => objet.id == product.id).length==0){
      this.storeService.listSousCommand.push({"id":product.id,"prix":product.price,"title":product.title,"quantity":1,"category":product.category});
    }else{
      this.storeService.listSousCommand.forEach((element: {quantity: number; id: any; product: number;}) => {
        if(element.id==product.id){
          element.quantity = element.quantity+1;
        }
      });
    }
    console.log(this.storeService.listSousCommand)
  }

}
