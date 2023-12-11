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

  isUnderlined: boolean = false;
  
  isUnderlinedModel: boolean = false;

  isUnderlinedSoluciones: boolean = false;

  isUnderlinedBlog: boolean = false;

  toggleUnderline() {
    this.isUnderlined = !this.isUnderlined;
    this.isUnderlinedModel = false;
  }

  toggleUnderlineModel(){
    this.isUnderlinedModel = !this.isUnderlinedModel;
    this.isUnderlined = false;
    this.isUnderlinedBlog = false;
    this.isUnderlinedSoluciones = false;
  }

  toggleUnderlineSoluciones(){
    this.isUnderlinedSoluciones = !this.isUnderlinedSoluciones;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineBlog(){
    this.isUnderlinedBlog = !this.isUnderlinedBlog;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
  }

  constructor(@Inject(DOCUMENT) private document:Document, private router: Router, private showmodal: ModalService){
    router.events.subscribe(s => {


    })
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
