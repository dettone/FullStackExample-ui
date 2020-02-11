import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
