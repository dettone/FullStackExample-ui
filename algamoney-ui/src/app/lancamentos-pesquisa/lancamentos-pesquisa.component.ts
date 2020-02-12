import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  constructor() { }
  lancamento = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pao', dataVencimento: '30/06/2017',
      dataPagamento: null, valor: 4.55, pessoa: 'padaria do Jose'
    },
    {
      tipo: 'LUCRO', descricao: 'Venda de pao', dataVencimento: '31/05/2015', dataPagamento: '25/10/1954',
      valor: 50.65, pessoa: 'padaria da Cristina'
    }
  ];

}
