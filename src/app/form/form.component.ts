import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      dni: new FormControl('', [
        Validators.required, 
        Validators.maxLength(9)
      ]),
      nameresidente: new FormControl('', [
        Validators.required
      ]),
      surnameresidente: new FormControl('', [
        Validators.required
      ]),
      parentesco: new FormControl(''),
      hora: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required, 
        Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/)
      ]),
      telefono: new FormControl('', [
        Validators.required
      ])

    })
  }

  ngOnInit(): void {
  }


  dniValidator(FormControl) {
    const value = FormControl.value;

    if (/^\d{8}[a-zA-Z]$/.test(value)){
      const numero = value.substr(0, value.length - 1);
      const letra = 
    }
  }
}
