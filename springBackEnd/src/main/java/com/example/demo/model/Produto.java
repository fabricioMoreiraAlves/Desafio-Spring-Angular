package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="produtos")

public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="cod")
	private int cod;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="valor")
	private float valor;
	
	@Column(name="estoque")
	private int estoque;
	
	@Column(name="cidade")
	private String cidade;
	
	
	public Produto() 
	{
		
	}
	
	public Produto(int cod, String nome, float valor, int estoque, String cidade) {
		super();
		this.cod = cod;
		this.nome = nome;
		this.valor = valor;
		this.estoque = estoque;
		this.cidade = cidade;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getCod() {
		return cod;
	}
	public void setCod(int cod) {
		this.cod = cod;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	public int getEstoque() {
		return estoque;
	}
	public void setEstoque(int estoque) {
		this.estoque = estoque;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	
	

}
