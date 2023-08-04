import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpresaSaervice } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresasComponent  implements OnInit{

  public empresas={
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

  constructor(private empresasService:EmpresaSaervice, private snak:MatSnackBar){}

  ngOnInit():void{
  }

  formSubmit(){
    console.log(this.empresas);
    if(this.empresas.estado_envio == '' || this.empresas.estado_envio == null){
      this.snak.open("El nombre de usuario es requerido!!",'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }

    this.empresasService.añadirEmpresa(this.empresas).subscribe(
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
