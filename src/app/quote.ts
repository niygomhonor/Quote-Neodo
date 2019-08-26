export class Quote {
 
    showDescription:boolean;
    constructor( public  id:number,public  nameQuote:string, public quoteAuthor:string, public submitPerson:string,public downVote:number,public upVote:number, public writtenDate: Date) {
        this.showDescription=false;
        
    }
}

