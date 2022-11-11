import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  
  radioBtnSelect = "Todos";
  listEmpleado: Empleado[] = [
    {legajo:1, nombre:'Juan Camilo', apellido:'Villacob', sexo:'Masculino', salario:1200},
    {legajo:2, nombre:'Juan Camilo1', apellido:'Villacob1', sexo:'Femenino', salario:1200},
    {legajo:3, nombre:'Juan Camilo2', apellido:'Villacob2', sexo:'Masculino', salario:1300},
    {legajo:4, nombre:'Juan Camilo3', apellido:'Villacob3', sexo:'Masculino', salario:1400},
    {legajo:5, nombre:'Juan Camilo4', apellido:'Villacob4', sexo:'Femenino', salario:1500},
    {legajo:6, nombre:'Juan Camilo5', apellido:'Villacob5', sexo:'Masculino', salario:1600},
    {legajo:7, nombre:'Juan Camilo6', apellido:'Villacob6', sexo:'Femenino', salario:1700},
    {legajo:8, nombre:'Juan Camilo7', apellido:'Villacob7', sexo:'Femenino', salario:1800}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados():number{
    return this.listEmpleado.length;
  }

  obtenerTotalFemenino():number {
    return this.listEmpleado.filter(list => list.sexo === "Femenino").length;
  }

  obtenerTotalMasculino():number {
    return this.listEmpleado.filter(list => list.sexo === "Masculino").length;
  }

  obtenerCambios(cambios: string): void{
    this.radioBtnSelect = cambios;
  }

}
