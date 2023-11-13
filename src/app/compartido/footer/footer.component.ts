import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: `footer.component.html`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  whatsapp: boolean = true;
  whatsappColor: boolean = false;

  instagram: boolean = true;
  instagramColor: boolean = false;

  facebook: boolean = true;
  facebookColor: boolean = false;

  link: boolean = true;
  linkColor: boolean = false;
 
  cambiarW(){
    this.whatsapp = false;
    this.whatsappColor = true;
  }

  cambiarWBlanco(){
    this.whatsapp = true;
    this.whatsappColor = false;
  }


  cambiarI(){
    this.instagram = false;
    this.instagramColor = true;
  }

  cambiarIBlanco(){
    this.instagram = true;
    this.instagramColor = false;
  }

  cambiarF(){
    this.facebook = false;
    this.facebookColor = true;
  }

  cambiarFBlanco(){
    this.facebook = true;
    this.facebookColor = false;
  }

  cambiarL(){
    this.link = false;
    this.linkColor = true;
  }

  cambiarLBlanco(){
    this.link = true;
    this.linkColor = false;
  }



}
