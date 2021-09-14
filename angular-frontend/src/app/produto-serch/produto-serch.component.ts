import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-serch',
  templateUrl: './produto-serch.component.html',
  styleUrls: ['./produto-serch.component.css']
})
export class ProdutoSerchComponent implements OnInit {

  id: number;
  produto: Produto;
  constructor(private route:ActivatedRoute,private produtoService: ProdutoService) 
  {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produto = new Produto();
    this.produtoService.getProdutoById(this.id).subscribe(data =>{
      this.produto =data;
    })
  }

}
