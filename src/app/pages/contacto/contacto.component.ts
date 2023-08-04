import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  implements OnInit{

  public contacto={
    referenciaEnvio:'',
    num_cuenta:'',
    destino:'',
    rango_fecha:'',
  }

  constructor(private contactoService:ContactoService, private snak:MatSnackBar){}

  ngOnInit():void{
  }

  formSubmit(){
    console.log(this.contacto);
    if(this.contacto.referenciaEnvio == '' || this.contacto.referenciaEnvio == null){
      this.snak.open("El nombre de usuario es requerido!!",'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }

    this.contactoService.añadirContacto(this.contacto).subscribe(
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
