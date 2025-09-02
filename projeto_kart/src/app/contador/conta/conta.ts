import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  imports: [],
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {

valor: number = 0;

aumentarcontador() {
  this.valor++;
}

diminuircontador() {
  this.valor--;
}

}
