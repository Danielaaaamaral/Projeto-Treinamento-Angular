import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pesquisa:string;
  posts:any=[];

  addpost(e){
    this.posts.push({
      user:"Daniela",
      name:"Daniela Amaral",
      body:e,
      likes:0,
      avatar:"../assets/imagens/avatar/stevie.jpg"
    });
  }

  onpesquisa(e){
 
    this.pesquisa=e;
  }
  
}
