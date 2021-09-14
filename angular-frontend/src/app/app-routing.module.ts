import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoSerchComponent } from './produto-serch/produto-serch.component';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';

const routes: Routes = [
  {
    path: 'produtos', component: ProdutoListComponent
  },
  {
    path: 'create-produto', component: CreateProdutoComponent
  },
  {
    path: 'update-produto/:id', component: UpdateProdutoComponent
  },
  {
    path: 'produto-serch/:id', component: ProdutoSerchComponent
  },
  {
    path:'', redirectTo:'produtos',pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
