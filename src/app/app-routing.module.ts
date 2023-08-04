import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';
import { EmbarqueComponent } from './pages/embarque/embarque.component';
import { EmpresasComponent } from './pages/empresas/empresa.component';
import { EnviosComponent } from './pages/envios/envios.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RastrarPorReferenciaComponent } from './pages/rastrearPorReferencia/enviosporreferencia.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  { //para pasar a esas paginas de acuerdo a la rutas localhost:4200/ (signup o login)
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component: DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    pathMatch:'full',
    canActivate: [NormalGuard]
  },
  { path: 'addRegistro', component: SignupComponent },
  { path: 'iniciarS', component: LoginComponent },
  { path: 'envio', component: EnviosComponent },
  { path:'embarque', component: EmbarqueComponent},
  { path:'cotizacion', component: CotizacionComponent},
  { path:'empresas', component: EmpresasComponent},
  { path:'enviosporreferencia', component: RastrarPorReferenciaComponent},
  { path:'contacto', component: ContactoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
