import { Component, Output } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export { Presu }

interface Presu {
  nombrePresu: string;
  nombreCliente: string;
  web: boolean;
  pags: number;
  langs: number;
  precioWeb: number;
  seo: boolean;
  ad: boolean;
  precioTotal: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  presu: Presu[] = []

  @Output() presus: Presu[] = []

  public myForm: FormGroup = this.fb.group({
    nombrePresu: ['', Validators.required],
    nombreCliente: ['', Validators.required],
    web: [false, Validators.required],
    seo: [false, Validators.required],
    ad: [false, Validators.required],
  })
  constructor(private fb: FormBuilder) { }
  get f() { return this.myForm.controls }

  presuMostrado: boolean = false
  verPresus() {
    this.presuMostrado = !this.presuMostrado
  }

  num1: number = 0
  precioPag(event: number) {
    this.num1 = event
  }
  num2: number = 0
  precioLang(event: number) {
    this.num2 = event
  }
  pagLangSuma: number = 0
  precioWeb(event: number) {
    this.pagLangSuma = event
  }

  calcularPrecio() {
    let precioTotal = 0;
    if (this.f['web'].value === true) {
      precioTotal += 500;
    }
    if (this.f['seo'].value === true) {
      precioTotal += 300;
    }
    if (this.f['ad'].value === true) {
      precioTotal += 200;
    }
    if (this.f['web'].value === false) {
      this.pagLangSuma = 0
    }
    precioTotal += this.pagLangSuma;
    return precioTotal;
  }

  onSave() {
    const nombrePresu = this.myForm.controls['nombrePresu'].value
    const nombreCliente = this.myForm.controls['nombreCliente'].value
    const web = this.f['web'].value
    const pags = this.num1
    const langs = this.num2
    const precioWeb = this.pagLangSuma
    const seo = this.f['seo'].value
    const ad = this.f['ad'].value
    const precioTotal = this.calcularPrecio()

    if (web === false && seo === false && ad === false) {
      return alert('Por favor, seleccion al menos UN servicio')
    }
    if (nombrePresu === '' || nombreCliente === '') {
      return alert('Por favor, introduce los nombres de PRESUPUESTO y CLIENTE')
    }

    const nuevoPresu = { nombrePresu, nombreCliente, web, pags, langs, precioWeb, seo, ad, precioTotal }
    this.presu.push(nuevoPresu)

    this.myForm.reset()
    this.myForm.controls['web'].patchValue(false);
    this.myForm.controls['seo'].patchValue(false);
    this.myForm.controls['ad'].patchValue(false);
    this.num1 = 1
    this.num2 = 1
    this.pagLangSuma = 30
  }

}
