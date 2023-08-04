import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnviosService } from 'src/app/services/envoio.service';

@Component({
  selector: 'app-enviosporreferencia',
  templateUrl: './enviosporreferencia.component.html',
  styleUrls: ['./enviosporreferencia.component.css']
})
export class RastrarPorReferenciaComponent  implements OnInit{

  public enviosproReferencia={
    referenciaEnvio:'',
    num_cuenta:'',
    destino:'',
    rango_fecha:'',
  }

  constructor(private enviosService:EnviosService, private snak:MatSnackBar){}

  ngOnInit():void{
  }

  formSubmit(){
    console.log(this.enviosproReferencia);
    if(this.enviosproReferencia.referenciaEnvio == '' || this.enviosproReferencia.referenciaEnvio == null){
      this.snak.open("El nombre de usuario es requerido!!",'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }

    this.enviosService.añadirEnvio(this.enviosproReferencia).subscribe(
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
