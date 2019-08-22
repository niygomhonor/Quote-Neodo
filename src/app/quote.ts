export class Quote {
    // nbr:number;
    // nameQuote:string;
    // descriptQuote:string;
    // writtenDate: Date
    showDescription:boolean;
    constructor( public  id:number,public nameQuote:string, public  descriptQuote:string, public writtenDate: Date) {
        this.showDescription=false;
    }
}

