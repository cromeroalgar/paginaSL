
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 

  { 
  path: '', 
  loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioModule)

},


 {
  path: '', redirectTo: '/', pathMatch: 'full',  
},
{
  path: '**', redirectTo: '/', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
