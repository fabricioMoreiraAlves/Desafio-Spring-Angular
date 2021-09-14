import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  id:number
  produto: Produto =new Produto();
  constructor(private produtoService : ProdutoService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produtoService.getProdutoById(this.id).subscribe(data =>{
      this.produto = data
    },error=>console.log(error));
    
  }
  onSubmit()
  {
    this.produtoService.updateProduto(this.id,this.produto).subscribe(data =>{
      this.goToProdutoList();
    }
    ,error=>console.log(error) );
  }
  
  goToProdutoList(){
    this.router.navigate(['/produtos']);
  }

}
