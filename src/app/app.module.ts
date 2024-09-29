import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import { ArticleVueComponent } from './components/article-vue/article-vue.component';
import {MatTableModule} from '@angular/material/table';
import { CartComponent } from './pages/cart/cart.component';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ArticleVueComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports:[],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
