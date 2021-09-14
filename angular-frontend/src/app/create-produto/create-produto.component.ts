import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
  
})

export class CreateProdutoComponent implements OnInit {

  produto : Produto =new Produto();
  constructor(private produtoService: ProdutoService,private router: Router) { }

  ngOnInit(): void {
  }

  saveProduto()
  {
    this.produtoService.createProduto(this.produto).subscribe(data =>
      {
        console.log(data);
        this.goToProdutoList();
      },
      error => console.log(error));
  }

  goToProdutoList()
  {
    this.router.navigate(['/produtos']);
  }

  onSubmit()
  {
    console.log(this.produto);
    this.saveProduto();  
  }

}
