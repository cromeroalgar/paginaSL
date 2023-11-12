import { CarruselService } from './../../compartido/servicios/carrusel.service';
import { ModalService } from './../../compartido/servicios/modal.service';
import { FormBuilder } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})


export class InicioComponent implements OnInit {
  
  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;

  constructor(private sanitizer: DomSanitizer, private carruselSVC: CarruselService, private router: Router, private formBuilder: FormBuilder, private showmodal: ModalService){
 
     
   
  }

 



  ngOnInit(): void {    


  }









}