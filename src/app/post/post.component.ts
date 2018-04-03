import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Output() submit:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  enviaPost(e){
    this.submit.emit(e);
  }
}
