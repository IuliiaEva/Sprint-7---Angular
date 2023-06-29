import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})


export class ModalComponent implements OnInit {
  
  constructor(public modal: NgbModal) { }

  ngOnInit(): void { }

  public contentModal: string = ""
  
  public openModal(content: any, id: string) {
    if (id === "pageModal") {
      this.contentModal = "Selecciona el número de páginas que tendrá tu web."
      this.modal.open(content)
    }
    if (id === "langModal") {
      this.contentModal = "Selecciona el número de idiomas que tendrá tu web."
      this.modal.open(content)
    }
  }

}
