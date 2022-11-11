import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleado',
  templateUrl: './count-empleado.component.html',
  styleUrls: ['./count-empleado.component.css']
})
export class CountEmpleadoComponent implements OnInit {

  @Input() todos: number;
  @Input() hombres: number;
  @Input() mujeres: number;
  @Output() changeBtn = new EventEmitter<string>();

  radioBtnSelect = "Todos";
  
  constructor() {
    this.todos = 0;
    this.hombres = 0;
    this.mujeres = 0;
  }

  ngOnInit(): void {
  }
  
  cambios(): void {
    this.changeBtn.emit(this.radioBtnSelect);
  }
}
