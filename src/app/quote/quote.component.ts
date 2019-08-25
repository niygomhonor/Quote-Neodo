import { Component, OnInit } from '@angular/core';
import{ Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
   
    new Quote(1,'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.','Dale Carnegie','Honorine',new Date(2019,6,9),0,0),
    new Quote(2,"If you can't explain it simply, you don't understand it well enough.",'Isaac Einstein','Honorine',new Date(2019,6,9),0,0),
    
  ];

    toggleDetails(index){
      this.quotes[index].showDescription=! this.quotes[index].showDescription;
    } 
   deleteQuote(isWritten,index){

    if (isWritten) {
      
let toDelete= confirm(`Are you sure you want to delete this Quote?`);

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

    upVote=0;
    downVote=0;
    
    increaseUpVote(i){
      this.quotes[i].upVote++;
    }
    increaseDownVote(i){
      this.quotes[i].downVote++;
    }
  
      counter:number;
      firstNumber:number;
      lastNumber:number;

    highlight(){
      this.firstNumber=0;
      this.lastNumber=0;

     for(this.counter=0;this.counter<this.quotes.length;this.counter++){
       this.lastNumber=this.quotes[this.counter].upVote;
       if (this.lastNumber>this.firstNumber) {
         this.firstNumber=this.lastNumber;
        
       }
      
     }
    //  console.log(this.firstNumber);
     return this.firstNumber;
   
    }
   
  constructor() { }

  ngOnInit() {
  }

}
