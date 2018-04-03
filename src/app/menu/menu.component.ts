import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Output() pesquisa:EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onpesquisa(e){
    this.pesquisa.emit(e);
  }
}
