export class Quote {
  vote:number;
    showDescription:boolean;
    constructor( public  id:number,public  nameQuote:string, public quoteAuthor:string,public  descriptQuote:string, public submitPerson:string, public writtenDate: Date,public downVote:number,public upVote:number) {
        this.showDescription=false;
        
    }
}

