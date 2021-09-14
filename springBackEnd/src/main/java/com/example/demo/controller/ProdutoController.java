package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Produto;
import com.example.demo.repository.ProdutoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	//todos os produtos
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/produtos")
	public List<Produto> getAllProdutos()
	{
		return produtoRepository.findAll();
		
	}
	
	// criar produtos
	@PostMapping("/produtos")
	public Produto createProduto(@RequestBody Produto produto) 
	{
		return produtoRepository.save(produto);
	}
	
	// busca produto por id
	@GetMapping("/produtos/{id}")
	public ResponseEntity<Produto> getProdutoById(@PathVariable Long id) 
	{
		Produto produto = produtoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id nao existe"));
		return ResponseEntity.ok(produto);
	}
	
	// atualiza o produto
	@PutMapping("/produtos/{id}")
	public ResponseEntity<Produto> updateProduto(@PathVariable Long id, @RequestBody Produto produtoDetails){
		Produto produto = produtoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id nao existe"));
		
		produto.setCod(produtoDetails.getCod());
		produto.setNome(produtoDetails.getNome());
		produto.setValor(produtoDetails.getValor());
		produto.setEstoque(produtoDetails.getEstoque());
		produto.setCidade(produtoDetails.getCidade());
		
		Produto updatedProduto = produtoRepository.save(produto);
		return ResponseEntity.ok(updatedProduto);
	}
	
	//deleta produto
	@DeleteMapping("/produtos/{id}")
	public ResponseEntity<Map<String, Boolean>>	 deleteProduto(@PathVariable Long id) 
	{
		Produto produto = produtoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id nao existe"));
		
		produtoRepository.delete(produto);
		Map<String, Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	} 
	

}
