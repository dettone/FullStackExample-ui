import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
constructor() { }
  pessoa = [{nome: 'João Vitor', cidade : 'Ipatinga', estado: 'MG' , status : true },
{nome: 'Lays Carolina', cidade : 'Ipatinga' , estado : 'MG' , status : false} ];

}

