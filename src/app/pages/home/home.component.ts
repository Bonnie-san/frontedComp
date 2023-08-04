import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Paqueteria GAPS';

  //metodos correspondientes
  constructor(private router:Router){}

  ListarPersona(){
    this.router.navigate(["listarClientes"]);
  }

  NuevoPersona(){
    this.router.navigate(["addCliente"]);
  }

  ListarPaquete(){
    this.router.navigate(["listarPaquetes"]);
  }

  NuevoPaquete(){
    this.router.navigate(["addPaquete"]);
  }


  RegistrosLista(){
    this.router.navigate(["listarRegistros"]);
  }

  NuevoRegisto(){
    this.router.navigate(["addRegistro"]);
  }

  IniciarS(){
    this.router.navigate(["iniciarS"]);
  }

  envios() {
    this.router.navigate(['/envios']);
  }
}
