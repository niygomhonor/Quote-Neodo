import { Component, OnInit } from '@angular/core';
import{ Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    // {nbr:1, nameQuote:'Never give up' , descriptQuote:'asdfghjk'},
    // {nbr:2, nameQuote:'Never give up',descriptQuote:'asdfghjk'},
    // {nbr:3, nameQuote:'Never give up',descriptQuote:'asdfghjk'}]

    new Quote(1,'Never give up','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quote(2,'Never give up','Diana has her birthday coming up soon',new Date(2019,1,12)),
    new Quote(3,'Never give up','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Quote(4,'Never give up','Damn Math',new Date(2019,2,14)),
    new Quote(5,'Never give up','Cause I am an evil overlord',new Date(2019,3,14)),]

    toggleDetails(index){
      this.quotes[index].showDescription=! this.quotes[index].showDescription;
    }
     
      
    
   writtenQuote(isWritten,index){
    if (isWritten) {
      
this.quotes.splice(index,1)
    }}
  constructor() { }

  ngOnInit() {
  }

}
