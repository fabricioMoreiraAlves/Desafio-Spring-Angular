import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { FormsModule } from '@angular/forms';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';
import { ProdutoSerchComponent } from './produto-serch/produto-serch.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    CreateProdutoComponent,
    UpdateProdutoComponent,
    ProdutoSerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
