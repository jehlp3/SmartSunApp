import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  openExternalLink() {
    window.open('https://ciclovivo.com.br/mao-na-massa/faca-voce-mesmo/limpeza-de-placas-solares-garante-eficiencia-do-sistema/', '_blank');
  }
}
