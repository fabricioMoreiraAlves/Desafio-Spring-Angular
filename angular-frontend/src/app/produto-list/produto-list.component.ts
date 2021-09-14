import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Produto} from  '../produto'
import { ProdutoService } from '../produto.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[]; 
  serchId: number;
  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.getProdutos(); 

  }

  private getProdutos()
  {
    this.produtoService.getProdutosList().subscribe(data =>{
      this.produtos = data;
    })
  }

  updateProduto(id: number)
  {
    this.router.navigate(['update-produto', id]);
  }

  deleteProduto(id: number)
  {
    this.produtoService.deleteProduto(id).subscribe(data=>{
      console.log(data);
      this.getProdutos();
    })
  }
  clickme() {
    console.log(this.serchId);
    this.router.navigate(['produto-serch', this.serchId]);
  }

}
