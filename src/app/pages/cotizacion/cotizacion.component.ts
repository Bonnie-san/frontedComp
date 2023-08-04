import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CotizacionService } from 'src/app/services/cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent  implements OnInit{

  public cotizacion={
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

  constructor(private cotizacioService:CotizacionService, private snak:MatSnackBar){}

  ngOnInit():void{
  }

  formSubmit(){
    console.log(this.cotizacion);
    if(this.cotizacion.estado_envio == '' || this.cotizacion.estado_envio == null){
      this.snak.open("El nombre de usuario es requerido!!",'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }

    this.cotizacioService.añadirCotizacion(this.cotizacion).subscribe(
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
