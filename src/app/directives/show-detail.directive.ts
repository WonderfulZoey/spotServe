import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowDetail]'
})
export class ShowDetailDirective {
  @Input('data') d;
  @Input('data1') d1;
  @HostListener('click') onClick() {
    console.log(this.d);
    console.log(this.d1);
  }
  constructor() { }


}
