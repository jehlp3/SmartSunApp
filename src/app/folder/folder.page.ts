import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public numero1!: number;
  public numero2!: number;
  public resultado!: number;
  private activatedRoute = inject(ActivatedRoute);
  private calculadora = new Calculadora(); // Instancia da classe Calculadora

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  calcularGastoMedio() {
    if (this.numero1 !== undefined && this.numero2 !== undefined) {
      const resultadoCalc = this.calculadora.calcular(this.numero1, this.numero2);
      this.resultado = parseFloat(resultadoCalc.toFixed(2)); // Retorna com 2 casas decimais e converte para número
    } else {
      this.resultado = 0;
    }
  }
}

// Classe Calculadora
export class Calculadora {
  calcular(a: number, b: number): number {
    return a !== 0 ? b / a : 0;
  }
}
