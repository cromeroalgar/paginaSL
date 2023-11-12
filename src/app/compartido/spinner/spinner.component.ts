import { SpinerService } from './../servicios/spiner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay text-center" *ngIf="cargando$ |async">  
  <div class="lds-roller "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  <div  *ngIf="texto$  |async" >
     <h3 class="mt-5 text-secondary zoom">{{texto$ |async}}</h3>
  </div>  
</div>`,
  styleUrls: ['./spinner.component.css']

})
export class SpinnerComponent {
  cargando$ = this.spinerSvc.cargando$
  texto$ = this.spinerSvc.texto$
  constructor(private spinerSvc:SpinerService ) { }

}
