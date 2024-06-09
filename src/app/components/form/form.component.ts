import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  constructor() {

  }

  ngOnInit(): void {
  }

  novoPensamento() {
    console.table("novo pensamento criado")
  }

  cancelar() {
    
  }
}
