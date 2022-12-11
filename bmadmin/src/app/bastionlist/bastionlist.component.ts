import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bastionlist',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bastionlist.component.html',
  styleUrls: ['./bastionlist.component.scss'],
})
export class BastionlistComponent {
  isMenuCollapsed = true;
  rows = [
    {
      img: "<img src='assets/img.png' />",
      name: 'Male',
      connected: 'Swimlane',
    },
    { img: 'Dany', name: 'Male', connected: 'KFC' },
    { img: 'Molly', name: 'Female', connected: 'Burger King' },
  ];
  columns = [
    { prop: 'img', name: 'Image' },
    { prop: 'name', name: 'Nom du Bastion' },
    { prop: 'connected', name: 'Nb de personne du bastion' },
  ];
  closeResult!: string;

  constructor(private modalService: NgbModal) {}

  openWindowCustomClass(content: any, id_bastion: string = '') {
    if (id_bastion == '') {
      // Nouveau bastion
    } else {
      // Bastion existant . Tu recharche tout l'objet du bastion et le stock dans une variable.
    }
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  saveEditBastion(modal: any) {
    modal.close();
  }
}
