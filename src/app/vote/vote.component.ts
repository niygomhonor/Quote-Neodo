import { Component, OnInit,Output,Input} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  likeVote=0;
  dislikeVote=0;
increaseUpVote(){
  this.likeVote=this.likeVote+1
}
increaseDownVote(){
  this.dislikeVote=this.dislikeVote+1
}

  constructor() { }

  ngOnInit() {
  }

}
