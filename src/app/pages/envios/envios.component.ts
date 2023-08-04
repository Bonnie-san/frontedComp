import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnviosService } from 'src/app/services/envoio.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent  implements OnInit{

  public envios={
    cuidadO:'',
    cuidadD:'',
    receptor:'',
    num_rastreo:'',
    estado_envio:'',
    estado_pago:'',
    localizacion:'',
    localizacionD:'',
    fecha_entrega:'',
  }

  constructor(private enviosService:EnviosService, private snak:MatSnackBar){}

  ngOnInit():void{
  }

  formSubmit(){
    console.log(this.envios);
    if(this.envios.estado_envio == '' || this.envios.estado_envio == null){
      this.snak.open("El nombre de usuario es requerido!!",'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }

    this.enviosService.añadirEnvio(this.envios).subscribe(
      (data)=>{
        console.log(data);
        alert('Usuario guardado con exito');
      },(error)=>{
        console.log(error);
        this.snak.open("Error (intenta con otro usuario)!!",'Aceptar',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'right'
        });
      }
    )
  }
}
