import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmbarqueService } from 'src/app/services/embarque.service';

@Component({
  selector: 'app-embarque',
  templateUrl: './embarque.component.html',
  styleUrls: ['./embarque.component.css']
})
export class EmbarqueComponent  implements OnInit{

  public embarque={
    peso:'',
    largo:'',
    ancho:'',
    altura:'',
    estado_pago:'',
   }

  constructor(private embarqueService:EmbarqueService, private snak:MatSnackBar){}

  ngOnInit():void{
  }

  formSubmit(){
    console.log(this.embarque);
    if(this.embarque.peso == '' || this.embarque.peso == null){
      this.snak.open("El nombre de usuario es requerido!!",'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      });
      return;
    }

    this.embarqueService.añadirEmbarque(this.embarque).subscribe(
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
