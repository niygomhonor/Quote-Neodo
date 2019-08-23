import { Component, OnInit } from '@angular/core';
import{ Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.','Dale Carnegie','I have to buy cookies for the parrot',new Date(2019,6,9)),
  ];

    toggleDetails(index){
      this.quotes[index].showDescription=! this.quotes[index].showDescription;
    } 
   deleteQuote(isWritten,index){

    if (isWritten) {
      
let toDelete= confirm(`Are you sure you want to delete ${this.quotes[index].nameQuote} Quote?`);

if (toDelete){
  this.quotes.splice(index,1)
}
    }}
    addNewQuote(quote){
      let quoteLength=this.quotes.length;
      quote.id=quoteLength+1;
      quote.writtenDate=new Date(quote.writtenDate);
      this.quotes.push(quote);
    }
  constructor() { }

  ngOnInit() {
  }

}
