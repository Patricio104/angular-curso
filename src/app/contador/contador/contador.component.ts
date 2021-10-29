import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h2><strong>La base es {{base}} </strong></h2>

        <button (click)="acomular(base);">+ {{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acomular(-base);">- {{base}}</button>
    `
})
export class ContadorComponent{
    titulo = 'Contador App';
    numero: number =10;
    base: number=3;

  acomular( valor : number){
    this.numero += valor;
   }
}