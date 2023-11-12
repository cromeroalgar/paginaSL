import { ModalService } from './../servicios/modal.service';
import { Component, HostListener,Inject} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: `header.component.html`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  scrolled:boolean=true; 
  lastScroll:number=0;
  now:number=0;
  formEnviado$ = this.showmodal.formEnviado$
  btnclickclose$ = this.showmodal.btnclickclose$

  ocultar = 0;
  mostarminibanner:boolean = false;

  constructor(@Inject(DOCUMENT) private document:Document, private router: Router, private showmodal: ModalService){
    router.events.subscribe(s => {

      /// mostar u ocultrar banner 
      if(this.router.url == '/' || this.router.url == '/planes' || this.router.url == '/servicios' ){
        this.mostarminibanner = true;

      }else{
        this.mostarminibanner = false;
      }
      /////
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if(this.router.url == '/metodoPago'){
          this.ocultar = 1;          
        } else {
          this.ocultar = 0;
        }
        //genera error con los slider y los botones de adicionales
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }   
    })
  }


  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }



  irCarritoServicios(): void {
    this.router.navigate(['/checkout-servicios']);
  }
  @HostListener("window:scroll",[])  
  onWindowScroll(){      
    
    this.now = window.scrollY  
    if( this.now >this.lastScroll && this.scrolled ){
      this.scrolled = false      
    
    }else if (this.now <this.lastScroll && !this.scrolled ) {
      this.scrolled = true        
    } 
    this.lastScroll = this.now  
   
  }



}
