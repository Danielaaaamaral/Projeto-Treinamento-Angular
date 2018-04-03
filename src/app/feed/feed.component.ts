import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

tweets =[{
  user:"stevie",
  name:"Stevie Feliciano",
  body:"Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
  likes:[],
  avatar:"../assets/imagens/avatar/stevie.jpg"
},
{
  user:"Deni",
  name:"Deni Feliciano",
  body:"Deni Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
  likes:[],
  avatar:"../assets/imagens/avatar/stevie.jpg"
}
]

 likedTweet=undefined;
 currentUser='stevie';

  constructor() { }

  ngOnInit() {
  }

  handleLikedTweetFromChildComponent(tweet){
   var index = this.tweets.findIndex(t =>{ return t.user== tweet.user})
   this.tweets[index].likes.push(this.currentUser);
   
  }
}
