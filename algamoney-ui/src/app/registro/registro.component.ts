import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor() { }

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome);
    //forma facil de pegar valores de formularios
  }
}
