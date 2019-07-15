import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class Room {
    id: number;
    value: number;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    public rooms: Room[] = [];
    public userTestStatus2: { id: number, name: string }[] = [
        { 'id': 201, 'name': 'Available' },
        { 'id': 202, 'name': 'Ready' },
        { 'id': 203, 'name': 'Started' },
        { 'id': 204, 'name': 'Available' },
        { 'id': 205, 'name': 'Ready' },
        { 'id': 206, 'name': 'Started' }];
    public userTestStatus: { id: number, name: string }[] = [
        { 'id': 101, 'name': 'Available' },
        { 'id': 102, 'name': 'Ready' },
        { 'id': 103, 'name': 'Started' },
        { 'id': 104, 'name': 'Available' },
        { 'id': 105, 'name': 'Ready' },
        { 'id': 106, 'name': 'Started' },
        { 'id': 107, 'name': 'Available' },
        { 'id': 108, 'name': 'Ready' },
        { 'id': 109, 'name': 'Started' },
        { 'id': 110, 'name': 'Available' },
        { 'id': 111, 'name': 'Ready' },
        { 'id': 112, 'name': 'Started' },
        { 'id': 113, 'name': 'Available' },
        { 'id': 114, 'name': 'Ready' },
        { 'id': 115, 'name': 'Started' },
        { 'id': 116, 'name': 'Started' },
        { 'id': 117, 'name': 'Available' },
        { 'id': 118, 'name': 'Ready' },
        { 'id': 119, 'name': 'Started' },
        { 'id': 120, 'name': 'Started' }
    ];
    constructor(private modalService: NgbModal) {
    }

    open() {
        const modalRef = this.modalService.open(NgbdModalRoom);
        modalRef.componentInstance.name = 'World';
      }

    ngOnInit() { }
}


@Component({
    selector: 'ngbd-modal-room',
    template: `
    <div class="row">
    <div class="col-md-4" *ngFor="let student of students">
    <!--Card button delete-->

    <div  class="card card-cascade mb-2" (click)="edit(student.id)">
      <!--Card image-->
      <div class="view overlay hm-white-slight waves-light " mdbRippleRadius>
          <img src="assets/images/StudentIcon.jpg" class="img-fluid mt-4 pl-3 pr-3" alt="">
        <a>
          <div class="mask mt-4"></div>
        </a>
      </div>
      <!--/.Card image-->

      <!--Card content-->
      <div class="card-body text-left">
        <!--Title-->
        <h4 class="card-title">
        </h4>
        <h6 > Ім'я: {{student.firstName}}</h6>
        <h6> Прізвище: {{student.lastName}}</h6>
      </div>
    </div>
</div>
</div>
    `
  })
  // tslint:disable-next-line:component-class-suffix
  export class NgbdModalRoom {

    errorMessage = '';
    constructor(public activeModal: NgbActiveModal) {}
    public students: { id: number, firstName: string, lastName: string }[] = [
        { 'id': 201, 'firstName': 'Максим', 'lastName': 'Оштук' },
        { 'id': 202, 'firstName': 'Володимир',  'lastName': 'Губчакевич' },
        { 'id': 203, 'firstName': 'Євгеній',  'lastName': 'Мазур' },
        { 'id': 204, 'firstName': 'Володимир',  'lastName': 'Коваль' },
        { 'id': 205, 'firstName': 'Олександр',  'lastName': 'Салига' },
        { 'id': 206, 'firstName': 'Владислав',  'lastName': 'Шабага' }];
  }
