import { CarruselService } from '../../compartido/servicios/carrusel.service';
import { ModalService } from '../../compartido/servicios/modal.service';
import { FormBuilder } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import lottie from 'lottie-web';


@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})


export class ModelosComponent implements OnInit {
  
  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;

  mostrarRecurso30Info: boolean = false;
  mostrarRecurso31Info: boolean = false;
  mostrarRecurso32Info: boolean = false;
  mostrarRecurso33Info: boolean = false;
  mostrarRecurso34Info: boolean = false;
  mostrarRecurso35Info: boolean = false;
  mostrarRecurso36Info: boolean = false;
  mostrarRecurso37Info: boolean = false;
  mostrarRecurso38Info: boolean = false;
  mostrarRecurso39Info: boolean = false;
  mostrarRecurso40Info: boolean = false;
  mostrarRecurso41Info: boolean = false;

  mostrarRecurso21Info: boolean = false;
  mostrarRecurso22Info: boolean = false;
  mostrarRecurso23Info: boolean = false;
  mostrarRecurso24Info: boolean = false;

  botonEmpresasBlanco: boolean = true;
  botonEmpresasRojo: boolean = false;
  botonEmprendimientosBlanco: boolean = true;
  botonEmprendimientosRojo: boolean = false;
  cartaCerebro2: boolean = true;
  cartaPluma: boolean = true;
  cartaDiana: boolean = true;
  infoEmprendimientos: boolean = false;
  infoEmpresas: boolean = false;
  espacioRojo: boolean = true;

  marginTopDiv: string = '30px';

  @ViewChild('colombia') colombia!: ElementRef;

  @ViewChild('banner') banner!: ElementRef;
  @ViewChild('mexico') mexico!: ElementRef;

  @ViewChild('ecuador') ecuador!: ElementRef;

  @ViewChild('peru') peru!: ElementRef;
  @ViewChild('chile') chile!: ElementRef;
  @ViewChild('argentina') argentina!: ElementRef;
  @ViewChild('dominicana') dominicana!: ElementRef;
  @ViewChild('guatemala') guatemala!: ElementRef;
  @ViewChild('salvador') salvador!: ElementRef;
  @ViewChild('panama') panama!: ElementRef;
  @ViewChild('honduras') honduras!: ElementRef;

  constructor(private sanitizer: DomSanitizer, private carruselSVC: CarruselService, private router: Router, private formBuilder: FormBuilder, private showmodal: ModalService){
 
     
   
  }

  resurso21(){
    this.mostrarRecurso21Info = !this.mostrarRecurso21Info;
    this.mostrarRecurso22Info = false;
    this.mostrarRecurso23Info = false;
    this.mostrarRecurso24Info = false;
  }

  resurso22(){
    this.mostrarRecurso22Info = !this.mostrarRecurso22Info;
    this.mostrarRecurso21Info = false;
    this.mostrarRecurso23Info = false;
    this.mostrarRecurso24Info = false;
  }

  resurso23(){
    this.mostrarRecurso23Info = !this.mostrarRecurso23Info;
    this.mostrarRecurso21Info = false;
    this.mostrarRecurso22Info = false;
    this.mostrarRecurso24Info = false;
  }

  resurso24(){
    this.mostrarRecurso24Info = !this.mostrarRecurso24Info;
    this.mostrarRecurso21Info = false;
    this.mostrarRecurso22Info = false;
    this.mostrarRecurso23Info = false;
  }

  resurso30(){
    this.mostrarRecurso30Info = !this.mostrarRecurso30Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso31(){
    this.mostrarRecurso31Info = !this.mostrarRecurso31Info;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso32(){
    this.mostrarRecurso32Info = !this.mostrarRecurso32Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso33(){
    this.mostrarRecurso33Info = !this.mostrarRecurso33Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso34(){
    this.mostrarRecurso34Info = !this.mostrarRecurso34Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso35(){
    this.mostrarRecurso35Info = !this.mostrarRecurso35Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso36(){
    this.mostrarRecurso36Info = !this.mostrarRecurso36Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso37(){
    this.mostrarRecurso37Info = !this.mostrarRecurso37Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso38(){
    this.mostrarRecurso38Info = !this.mostrarRecurso38Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso39(){
    this.mostrarRecurso39Info = !this.mostrarRecurso39Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso40(){
    this.mostrarRecurso40Info = !this.mostrarRecurso40Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso41(){
    this.mostrarRecurso41Info = !this.mostrarRecurso41Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso30Info = false;
  }
 
  mostrarInfoEmpresas(){

    this.botonEmpresasBlanco = false;
    this.botonEmpresasRojo = true;
    this.infoEmpresas = true;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = false;
    } else {
      this.espacioRojo = true;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }


  ocultarInfoEmpresas(){

    this.botonEmpresasBlanco = true;
    this.botonEmpresasRojo = false;
    this.infoEmpresas = false;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '30px';
    } else {
      this.marginTopDiv = '226.5px';
    }
  }

  mostrarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = false;
    this.botonEmprendimientosRojo = true;
    this.infoEmprendimientos = true;

    if(this.botonEmpresasRojo == true){
      this.espacioRojo = false;
    } else  {
      this.espacioRojo = true;
    }

    if(this.botonEmpresasRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }

  ocultarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = true;
    this.botonEmprendimientosRojo = false;
    this.infoEmprendimientos = false;

    if(this.botonEmpresasRojo == false){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }
  }

  
  mostrarCerebro2(){
    this.cartaCerebro2 = !this.cartaCerebro2;
    this.cartaPluma = true;
    this.cartaDiana = true;
  }

  mostrarPluma(){
    this.cartaPluma = !this.cartaPluma;
    this.cartaCerebro2 = true;
    this.cartaDiana = true;
  }

  mostrarDiana(){
    this.cartaDiana = !this.cartaDiana;
    this.cartaCerebro2 = true;
    this.cartaPluma = true;
  }

  ngOnInit(): void {    
   
    window.scrollTo(0, 0);

  
    const animationContainer = document.getElementById('reloj');
  
    if (animationContainer) {
      const animation1 = lottie.loadAnimation({ container: animationContainer, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/reloj.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });

      animation1.setSpeed(0.3);
    }

    const animationContainer2 = document.getElementById('posit');
  
    if (animationContainer2) {
      const animation2 = lottie.loadAnimation({ container: animationContainer2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/posit.json' });
      animation2.addEventListener('DOMLoaded', () => {
      });

      animation2.setSpeed(0.3);
    }

    const animationContainer3 = document.getElementById('robot');

    if (animationContainer3) {
      const animation3 = lottie.loadAnimation({ container: animationContainer3, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/robot.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationCerebro2 = document.getElementById('cerebro2');

    if (animationCerebro2) {
      const animation3 = lottie.loadAnimation({ container: animationCerebro2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/cerebro2.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }

    
    const animationPluma = document.getElementById('pluma');

    if (animationPluma) {
      const animation3 = lottie.loadAnimation({ container: animationPluma, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/pluma.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }

    const animationDiana = document.getElementById('diana');

    if (animationDiana) {
      const animation3 = lottie.loadAnimation({ container: animationDiana, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/diana.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }
    

    const animationContainer22 = document.getElementById('titulobanner');
  
    if (animationContainer22) {
      const animation22 = lottie.loadAnimation({ container: animationContainer22, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/titulobanner.json' });
      animation22.addEventListener('DOMLoaded', () => {
      });

      
    animation22.setSpeed(0.2);
    }
 

  }


  banderaLinea1 = true;

  banderaLinea4 = true;
  
  banderaLinea2 = true;

  banderaLinea3 = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
        // Obtener la posición actual del scroll en el eje Y
        const scrollYPos = window.scrollY || window.pageYOffset;

        console.log(scrollYPos)

        if (scrollYPos < 550){
          if (this.banner) {
            this.banner.nativeElement.style.display = 'none';
          }
        } else {
          if (this.banner) {
            this.banner.nativeElement.style.display = 'block';
          }
        }

        if(scrollYPos > 50 && this.banderaLinea1 == true){

          this.banderaLinea1 = false;

          const animationContainer5 = document.getElementById('lineaTexto');

          if (animationContainer5) {
            const animation5 = lottie.loadAnimation({ container: animationContainer5, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja2.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });
      
            animation5.setSpeed(0.2);
          }

          const animationContainer6 = document.getElementById('lineaTexto2');

          if (animationContainer6) {
            const animation6 = lottie.loadAnimation({ container: animationContainer6, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja.json' });
            animation6.addEventListener('DOMLoaded', () => {
            });
      
            animation6.setSpeed(0.2);
      
          }
      

        }

        if (scrollYPos > 1200 && this.banderaLinea4 == true){

          this.banderaLinea4 = false;

          const animationConexion = document.getElementById('conexion');

          if (animationConexion) {
            const animation3 = lottie.loadAnimation({ container: animationConexion, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/conexion.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationPosicionamiento = document.getElementById('posicionamiento');

          if (animationPosicionamiento) {
            const animation3 = lottie.loadAnimation({ container: animationPosicionamiento, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/posicionamiento.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationInnovacion = document.getElementById('innovacion');

          if (animationInnovacion) {
            const animation3 = lottie.loadAnimation({ container: animationInnovacion, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/innovacion.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationCultura = document.getElementById('cultura');

          if (animationCultura) {
            const animation3 = lottie.loadAnimation({ container: animationCultura, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/cultura.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

        }

        
        if(scrollYPos > 1900 && this.banderaLinea2 == true){

          this.banderaLinea2 = false;

          const animationBombillo = document.getElementById('bombillo');

          if (animationBombillo) {
            const animation3 = lottie.loadAnimation({ container: animationBombillo, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/bombillo.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationCorona = document.getElementById('corona');

          if (animationCorona) {
            const animation3 = lottie.loadAnimation({ container: animationCorona, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/corona.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationCorazon = document.getElementById('corazon');

          if (animationCorazon) {
            const animation3 = lottie.loadAnimation({ container: animationCorazon, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/corazon.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationCorazones = document.getElementById('corazones');

          if (animationCorazones) {
            const animation3 = lottie.loadAnimation({ container: animationCorazones, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/corazones.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationMago = document.getElementById('mago');

          if (animationMago) {
            const animation3 = lottie.loadAnimation({ container: animationMago, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mago.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationBufon = document.getElementById('bufon');

          if (animationBufon) {
            const animation3 = lottie.loadAnimation({ container: animationBufon, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/bufon.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationCasa = document.getElementById('casa');

          if (animationCasa) {
            const animation3 = lottie.loadAnimation({ container: animationCasa, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/casa.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationMedalla = document.getElementById('medalla');

          if (animationMedalla) {
            const animation3 = lottie.loadAnimation({ container: animationMedalla, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/medalla.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationPaisaje = document.getElementById('paisaje');

          if (animationPaisaje) {
            const animation3 = lottie.loadAnimation({ container: animationPaisaje, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/paisaje.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationBuho = document.getElementById('buho');

          if (animationBuho) {
            const animation3 = lottie.loadAnimation({ container: animationBuho, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/buho.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          
          const animationFlor = document.getElementById('flor');

          if (animationFlor) {
            const animation3 = lottie.loadAnimation({ container: animationFlor, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/flor.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationManoEstrella = document.getElementById('manoEstrella');

          if (animationManoEstrella) {
            const animation3 = lottie.loadAnimation({ container: animationManoEstrella, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/manoEstrella.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }



          const animationContainer7 = document.getElementById('lineaTexto3');

          if (animationContainer7) {
            const animation7 = lottie.loadAnimation({ container: animationContainer7, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaseparadorauno.json' });
            animation7.addEventListener('DOMLoaded', () => {
            });
      
            animation7.setSpeed(0.2);
      
          }

          const animationContainer9 = document.getElementById('lineaTexto5');

          if (animationContainer9) {
            const animation9 = lottie.loadAnimation({ container: animationContainer9, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja2.json' });
            animation9.addEventListener('DOMLoaded', () => {
            });
      
            animation9.setSpeed(0.2);
      
          }

          const animationContainer8 = document.getElementById('lineaTexto4');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });
      
            animation8.setSpeed(0.2);
      
          }
        }

        if(scrollYPos > 3130 && this.banderaLinea3 == true){

          this.banderaLinea3 = false;

          const animation6sombreros = document.getElementById('6sombreros');

          if (animation6sombreros) {
            const animation3 = lottie.loadAnimation({ container: animation6sombreros, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/6sombreros.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationGamificacion = document.getElementById('gamificacion');

          if (animationGamificacion) {
            const animation3 = lottie.loadAnimation({ container: animationGamificacion, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/gamificacion.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationRastreo = document.getElementById('rastreo');

          if (animationRastreo) {
            const animation3 = lottie.loadAnimation({ container: animationRastreo, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/rastreo.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

          const animationRealidadVirtual = document.getElementById('realidadVirtual');

          if (animationRealidadVirtual) {
            const animation3 = lottie.loadAnimation({ container: animationRealidadVirtual, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/realidadVirtual.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }
          
          const animationSocial = document.getElementById('social');

          if (animationSocial) {
            const animation3 = lottie.loadAnimation({ container: animationSocial, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/social.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }

                 
          const animationScp = document.getElementById('scp');

          if (animationScp) {
            const animation3 = lottie.loadAnimation({ container: animationScp, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/scp.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
          }


          const animationContainer8 = document.getElementById('lineaTexto6');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });
      
            animation8.setSpeed(0.2);
      
          }

          const animationContainer4 = document.getElementById('lineach');

    if (animationContainer4) {
      const animation4 = lottie.loadAnimation({ container: animationContainer4, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineapeque.json' });
      animation4.addEventListener('DOMLoaded', () => {
      });

      animation4.setSpeed(0.1);

    }

    const animationContainer23 = document.getElementById('titulomapa');
  
    if (animationContainer23) {

      timer(0).subscribe(() => {

      const animation23 = lottie.loadAnimation({ container: animationContainer23, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/titulomapa.json' });
 
    animation23.addEventListener('DOMLoaded', () => {
    });

    animation23.setSpeed(0.3);

  });
    


    }


    const animationContainer10 = document.getElementById('colombia');

    if (animationContainer10) {

      timer(1000).subscribe(() => {

      const animation10 = lottie.loadAnimation({ container: animationContainer10, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/colombia.json' });
      animation10.addEventListener('DOMLoaded', () => {
      });

      animation10.setSpeed(0.2);

      if (this.colombia) {
        this.colombia.nativeElement.style.display = 'block';
      }

    });

    }



    const animationContainer12 = document.getElementById('mexico');

    if (animationContainer12) {

      timer(1500).subscribe(() => {

      const animation12 = lottie.loadAnimation({ container: animationContainer12, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation12.addEventListener('DOMLoaded', () => {
      });

      animation12.setSpeed(0.2);

      if (this.mexico) {
        this.mexico.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer13 = document.getElementById('salvador');

    if (animationContainer13) {

      
      timer(3000).subscribe(() => {

      const animation13 = lottie.loadAnimation({ container: animationContainer13, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation13.addEventListener('DOMLoaded', () => {
      });

      animation13.setSpeed(0.2);

      if (this.salvador) {
        this.salvador.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer14 = document.getElementById('peru');

    if (animationContainer14) {

      
      timer(5500).subscribe(() => {
      
      const animation14 = lottie.loadAnimation({ container: animationContainer14, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation14.addEventListener('DOMLoaded', () => {
      });

      animation14.setSpeed(0.2);

      if (this.peru) {
        this.peru.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer15 = document.getElementById('argentina');

    if (animationContainer15) {

      timer(6500).subscribe(() => {

      const animation15 = lottie.loadAnimation({ container: animationContainer15, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/panamaArgentina.json' });
      animation15.addEventListener('DOMLoaded', () => {
      });

      animation15.setSpeed(0.2);

      if (this.argentina) {
        this.argentina.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer16 = document.getElementById('panama');

    if (animationContainer16) {

      timer(4000).subscribe(() => {

      const animation16 = lottie.loadAnimation({ container: animationContainer16, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/panamaArgentina.json' });
      animation16.addEventListener('DOMLoaded', () => {
      });

      animation16.setSpeed(0.2);

      if (this.panama) {
        this.panama.nativeElement.style.display = 'block';
      }

    });

    }


    const animationContainer17 = document.getElementById('guatemala');

    if (animationContainer17) {

      timer(2000).subscribe(() => {

      const animation17 = lottie.loadAnimation({ container: animationContainer17, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/DominicanaGuatemala.json' });
      animation17.addEventListener('DOMLoaded', () => {
      });

      animation17.setSpeed(0.2);

      if (this.guatemala) {
        this.guatemala.nativeElement.style.display = 'block';
      }

    });

    }


    
    const animationContainer18 = document.getElementById('dominicana');

    if (animationContainer18) {

      timer(2000).subscribe(() => {

      const animation18 = lottie.loadAnimation({ container: animationContainer18, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation18.addEventListener('DOMLoaded', () => {
      });

      animation18.setSpeed(0.2);

      if (this.dominicana) {
        this.dominicana.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer19 = document.getElementById('ecuador');

    if (animationContainer19) {

      timer(5000).subscribe(() => {

      const animation19 = lottie.loadAnimation({ container: animationContainer19, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/DominicanaGuatemala.json' });
      animation19.addEventListener('DOMLoaded', () => {
      });

      animation19.setSpeed(0.2);

      if (this.ecuador) {
        this.ecuador.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer20 = document.getElementById('chile');

    if (animationContainer20) {

      timer(6000).subscribe(() => {

      const animation20 = lottie.loadAnimation({ container: animationContainer20, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation20.addEventListener('DOMLoaded', () => {
      });

      animation20.setSpeed(0.2);

      if (this.chile) {
        this.chile.nativeElement.style.display = 'block';
      }

    });

    }


    const animationContainer21 = document.getElementById('honduras');

    if (animationContainer21) {

      timer(3500).subscribe(() => {

      const animation21 = lottie.loadAnimation({ container: animationContainer21, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation21.addEventListener('DOMLoaded', () => {
      });

      animation21.setSpeed(0.2);

      if (this.honduras) {
        this.honduras.nativeElement.style.display = 'block';
      }

    });

    }


        }




  }






}