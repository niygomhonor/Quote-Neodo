import { Directive, ElementRef, HostListener,Input} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor( private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor="chocolate";
}

}
