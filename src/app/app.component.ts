import { collectExternalReferences } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome:string = '';
  persone = ['Max', 'Paolo', 'Maria'];
  users = [
    {nome: 'Max', citta: 'Roma'},
    {nome: 'Paolo', citta: 'Milano'},
    {nome: 'Maria', citta: 'Napoli'}
  ];
  valore = 10;
addNome(){
  this.persone.push(this.nome);
  }

addUser(name: string, citta: string){
  this.users.push(
    {nome: name, citta: citta}
    );
  }


}
