import { CarruselService } from './../../compartido/servicios/carrusel.service';
import { ModalService } from './../../compartido/servicios/modal.service';
import { FormBuilder } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import lottie from 'lottie-web';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})


export class InicioComponent implements OnInit {
  
  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;


  botonEmpresasBlanco: boolean = true;
  botonEmpresasRojo: boolean = false;
  botonEmprendimientosBlanco: boolean = true;
  botonEmprendimientosRojo: boolean = false;
  infoEmprendimientos: boolean = false;
  infoEmpresas: boolean = false;
  espacioRojo: boolean = true;

  marginTopDiv: string = '30px';

  constructor(private sanitizer: DomSanitizer, private carruselSVC: CarruselService, private router: Router, private formBuilder: FormBuilder, private showmodal: ModalService){
 
     
   
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

  ngOnInit(): void {    

    window.scroll(0,0);

    const animationContainer = document.getElementById('cerebro');
  
    if (animationContainer) {
      const animation1 = lottie.loadAnimation({ container: animationContainer, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/cerebrito.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer2 = document.getElementById('ojo');
  
    if (animationContainer2) {
      const animation2 = lottie.loadAnimation({ container: animationContainer2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/ojos.json' });
      animation2.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer3 = document.getElementById('flecha');

    if (animationContainer3) {
      const animation3 = lottie.loadAnimation({ container: animationContainer3, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/flecha.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });
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

  
  banderaLinea2 = true;

  banderaLinea3 = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
        // Obtener la posición actual del scroll en el eje Y
        const scrollYPos = window.scrollY || window.pageYOffset;

        if(scrollYPos > 100 && this.banderaLinea1 == true){

          this.banderaLinea1 = false;

          const animationContainer5 = document.getElementById('lineaTexto');

          if (animationContainer5) {
            const animation5 = lottie.loadAnimation({ container: animationContainer5, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });
      
            animation5.setSpeed(0.2);
          }

          const animationContainer6 = document.getElementById('lineaTexto2');

          if (animationContainer6) {
            const animation6 = lottie.loadAnimation({ container: animationContainer6, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation6.addEventListener('DOMLoaded', () => {
            });
      
            animation6.setSpeed(0.2);
      
          }
      

        }

        
        if(scrollYPos > 2000 && this.banderaLinea2 == true){

          this.banderaLinea2 = false;

          const animationContainer7 = document.getElementById('lineaTexto3');

          if (animationContainer7) {
            const animation7 = lottie.loadAnimation({ container: animationContainer7, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation7.addEventListener('DOMLoaded', () => {
            });
      
            animation7.setSpeed(0.2);
      
          }

          const animationContainer9 = document.getElementById('lineaTexto5');

          if (animationContainer9) {
            const animation9 = lottie.loadAnimation({ container: animationContainer9, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation9.addEventListener('DOMLoaded', () => {
            });
      
            animation9.setSpeed(0.2);
      
          }

          const animationContainer8 = document.getElementById('lineaTexto4');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });
      
            animation8.setSpeed(0.2);
      
          }
        }

        if(scrollYPos > 1100 && this.banderaLinea3 == true){

          this.banderaLinea3 = false;

          const animationContainer4 = document.getElementById('lineach');

    if (animationContainer4) {
      const animation4 = lottie.loadAnimation({ container: animationContainer4, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineapeque.json' });
      animation4.addEventListener('DOMLoaded', () => {
      });

      animation4.setSpeed(0.1);

    }

    const animationContainer23 = document.getElementById('titulomapa');
  
    if (animationContainer23) {
      const animation23 = lottie.loadAnimation({ container: animationContainer23, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/titulomapa.json' });
      animation23.addEventListener('DOMLoaded', () => {
      });

      
    animation23.setSpeed(0.5);
    


    }


    const animationContainer10 = document.getElementById('colombia');

    if (animationContainer10) {
      const animation10 = lottie.loadAnimation({ container: animationContainer10, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/colombia.json' });
      animation10.addEventListener('DOMLoaded', () => {
      });

      animation10.setSpeed(0.2);

    }



    const animationContainer12 = document.getElementById('mexico');

    if (animationContainer12) {
      const animation12 = lottie.loadAnimation({ container: animationContainer12, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation12.addEventListener('DOMLoaded', () => {
      });

      animation12.setSpeed(0.2);

    }

    const animationContainer13 = document.getElementById('salvador');

    if (animationContainer13) {
      const animation13 = lottie.loadAnimation({ container: animationContainer13, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation13.addEventListener('DOMLoaded', () => {
      });

      animation13.setSpeed(0.2);

    }

    const animationContainer14 = document.getElementById('peru');

    if (animationContainer14) {
      const animation14 = lottie.loadAnimation({ container: animationContainer14, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation14.addEventListener('DOMLoaded', () => {
      });

      animation14.setSpeed(0.2);

    }

    const animationContainer15 = document.getElementById('argentina');

    if (animationContainer15) {
      const animation15 = lottie.loadAnimation({ container: animationContainer15, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/panamaArgentina.json' });
      animation15.addEventListener('DOMLoaded', () => {
      });

      animation15.setSpeed(0.2);

    }

    const animationContainer16 = document.getElementById('panama');

    if (animationContainer16) {
      const animation16 = lottie.loadAnimation({ container: animationContainer16, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/panamaArgentina.json' });
      animation16.addEventListener('DOMLoaded', () => {
      });

      animation16.setSpeed(0.2);

    }


    const animationContainer17 = document.getElementById('guatemala');

    if (animationContainer17) {
      const animation17 = lottie.loadAnimation({ container: animationContainer17, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/DominicanaGuatemala.json' });
      animation17.addEventListener('DOMLoaded', () => {
      });

      animation17.setSpeed(0.2);

    }


    
    const animationContainer18 = document.getElementById('dominicana');

    if (animationContainer18) {
      const animation18 = lottie.loadAnimation({ container: animationContainer18, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation18.addEventListener('DOMLoaded', () => {
      });

      animation18.setSpeed(0.2);

    }

    const animationContainer19 = document.getElementById('ecuador');

    if (animationContainer19) {
      const animation19 = lottie.loadAnimation({ container: animationContainer19, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/DominicanaGuatemala.json' });
      animation19.addEventListener('DOMLoaded', () => {
      });

      animation19.setSpeed(0.2);

    }

    const animationContainer20 = document.getElementById('chile');

    if (animationContainer20) {
      const animation20 = lottie.loadAnimation({ container: animationContainer20, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation20.addEventListener('DOMLoaded', () => {
      });

      animation20.setSpeed(0.2);

    }


    const animationContainer21 = document.getElementById('honduras');

    if (animationContainer21) {
      const animation21 = lottie.loadAnimation({ container: animationContainer21, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation21.addEventListener('DOMLoaded', () => {
      });

      animation21.setSpeed(0.2);

    }


        }




  }






}