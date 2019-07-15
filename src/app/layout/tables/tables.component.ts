import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, EventEmitter, Output } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/core/models/student.model';
import { takeWhile } from 'rxjs/operators';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export interface DialogData {
    animal: string;
    name: string;
  }

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    animal: string;
    name: string; // dlt
    id: number;
    public isSelected = false;
    public students: Student[] = [];
    public student = new Student;
    public row: number;
    private alive = true;
    errorMessage = '';
    public searchText;
    constructor(private _studentService: StudentService, private modalService: NgbModal) { }
    ngOnInit() {
        this.row = 0;
        this.getStudent();
    }

    onChanged(increased: any) {
      this.getStudent();
  }

    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
      }

      sendMessage() {
        const modalRef = this.modalService.open(NgbdModalMessage);
        modalRef.componentInstance.name = 'World';
      }

      edit(id: number) {
        const modalRef = this.modalService.open(NgbdModalEdit);
        modalRef.componentInstance.id = id;
      }
      public getStudntFake(): void {
        this.getStudent();
      }
    private getStudent(): void {
        this._studentService.getResult().
            subscribe(
                data => {
                    this.students = data;
                }
            );
    }

    public dropStudent(id: number): any {
        this._studentService.deleteStudent(id).subscribe( hospital => {this.getStudent(),
            // tslint:disable-next-line:no-unused-expression
            res => console.log('neOK'); });
    }

    public addStudent(): void {
        this._studentService.addStudent(this.student).pipe(
            takeWhile(() => this.alive))
            .subscribe(
              response => {
              },
              error => {
                this.errorMessage = error.message;
              });
              this.getStudent();
              this.students = [...this.students, this.student];
    }

    onSelect(): void {
        this.isSelected = !this.isSelected;
    }

    updateHospital(student: Student): void {
        console.log('student');
    }
}

@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="jumbotron">
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <form name="form" (ngSubmit)="f.form.valid" #f="ngForm" novalidate>
                <div class="form-group">
                        <label for="firstName">Ім'я</label>
                        <input type="text" class="form-control" name="firstName" [(ngModel)]="student.firstName" #firstName="ngModel" [ngClass]="{ 'is-invalid': f.submitted && firstName.invalid }" required />
                        <div *ngIf="f.submitted && firstName.invalid" class="invalid-feedback">
                            <div *ngIf="firstName.errors.required">First Name is required</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Прізвище</label>
                        <input type="text" class="form-control" name="lastName" [(ngModel)]="student.lastName" #lastName="ngModel" [ngClass]="{ 'is-invalid': f.submitted && lastName.invalid }" required />
                        <div *ngIf="f.submitted && lastName.invalid" class="invalid-feedback">
                            <div *ngIf="lastName.errors.required">Last Name is required</div>
                        </div>
                    </div>
                <div class="form-group">
                        <label for="email">Телефон</label>
                        <input type="text" class="form-control" name="phoneNumber" [(ngModel)]="student.phoneNumber" #phoneNumber="ngModel"  />
                    </div>
                    <div class="form-group">
                        <label for="email">Електрона пошта</label>
                        <input type="text" class="form-control" name="email" [(ngModel)]="student.email" #email="ngModel" />
                    </div>
                    <div class="form-group">
                    <label for="institute">Інститут</label>
                    <input type="text" class="form-control" name="institute" [(ngModel)]="student.institute" #institute="ngModel"  />
                </div>


                    <div class="form-group">
                    <label for="course">Курс</label>
                    <input type="text" class="form-control" name="course" [(ngModel)]="student.course" #course="ngModel"  />
                </div>
                <div class="form-group">
                <label for="room">Кімната</label>
                <input type="text" class="form-control" name="room" [(ngModel)]="student.room" #room="ngModel"  />
            </div>
            <div class="form-group">
            <label for="privilges">Пільги</label>
            <input type="text" class="form-control" name="privilges" [(ngModel)]="student.privilges" #privilges="ngModel"  />
        </div>
         <div class="form-group">
                    <label for="city">Місто</label>
                    <input type="text" class="form-control" name="city" [(ngModel)]="student.city" #city="ngModel"  />
                </div>
                <div class="form-group">
                <label for="service">Оплачено</label>
                <input type="text" class="form-control" name="service" [(ngModel)]="student.service" #service="ngModel"  />
            </div>
                    <div class="form-group">
                        <button (click)="addStudent(student)" class="btn btn-primary">Додати</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    `
  })
  export class NgbdModalContent {
    @Input() name;
    @ViewChild('child') child: TablesComponent;
    public student = new Student;
    private alive = true;
    errorMessage = '';
    @Output() onChanged = new EventEmitter<boolean>();
    constructor(public activeModal: NgbActiveModal, private _studentService: StudentService) {}

    public addStudent(): void {
        this._studentService.addStudent(this.student).pipe(
            takeWhile(() => this.alive))
            .subscribe(
              response => {
              },
              error => {
                this.errorMessage = error.message;
              });
              this.onChanged.emit(true);
    }
  }

  @Component({
    selector: 'ngbd-modal',
    template: `
    <!-- main app container -->
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
                    <div class="form-group">
                            <label for="firstName">Ім'я</label>
                            <input type="text" class="form-control" name="firstName" [(ngModel)]="student.firstName" #firstName="ngModel" [ngClass]="{ 'is-invalid': f.submitted && firstName.invalid }" required />
                            <div *ngIf="f.submitted && firstName.invalid" class="invalid-feedback">
                                <div *ngIf="firstName.errors.required">First Name is required</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Прізвище</label>
                            <input type="text" class="form-control" name="lastName" [(ngModel)]="student.lastName" #lastName="ngModel" [ngClass]="{ 'is-invalid': f.submitted && lastName.invalid }" required />
                            <div *ngIf="f.submitted && lastName.invalid" class="invalid-feedback">
                                <div *ngIf="lastName.errors.required">Last Name is required</div>
                            </div>
                        </div>
                    <div class="form-group">
                            <label for="email">Телефон</label>
                            <input type="text" class="form-control" name="phoneNumber" [(ngModel)]="student.phoneNumber" #phoneNumber="ngModel"  />
                        </div>
                        <div class="form-group">
                            <label for="email">Електрона пошта</label>
                            <input type="text" class="form-control" name="email" [(ngModel)]="student.email" #email="ngModel" />
                        </div>
                        <div class="form-group">
                        <label for="institute">Інститут</label>
                        <input type="text" class="form-control" name="institute" [(ngModel)]="student.institute" #institute="ngModel"  />
                    </div>


                        <div class="form-group">
                        <label for="course">Курс</label>
                        <input type="text" class="form-control" name="course" [(ngModel)]="student.course" #course="ngModel"  />
                    </div>
                    <div class="form-group">
                    <label for="room">Кімната</label>
                    <input type="text" class="form-control" name="room" [(ngModel)]="student.room" #room="ngModel"  />
                </div>
                <div class="form-group">
                <label for="privilges">Пільги</label>
                <input type="text" class="form-control" name="privilges" [(ngModel)]="student.privilges" #privilges="ngModel"  />
            </div>
             <div class="form-group">
                        <label for="city">Місто</label>
                        <input type="text" class="form-control" name="city" [(ngModel)]="student.city" #city="ngModel"  />
                    </div>
                    <div class="form-group">
                    <label for="service">Оплачено</label>
                    <input type="text" class="form-control" name="service" [(ngModel)]="student.service" #service="ngModel"  />
                </div>
                        <div class="form-group">
                            <button (click)="addStudent(student)" class="btn btn-primary">Редагувати</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
  })
  export class NgbdModalEdit implements OnInit {



    @Input() id;
    private alive = true;
    errorMessage = '';
    public student: Student = new Student;
    constructor(public activeModal: NgbActiveModal, private _studentService: StudentService) {}

    ngOnInit(): any {
      this.getStudent();
     }
    private getStudent(): void {
      this._studentService.getStudent(this.id).
      subscribe(
          data => {
              this.student = data;
          }
      );
    }
    public addStudent(student): void {
      this._studentService.changeStudent(student).pipe(
          takeWhile(() => this.alive))
          .subscribe(
            response => {
            },
            error => {
              this.errorMessage = error.message;
            });
  }
  }








  @Component({
    selector: 'ngbd-modal-message',
    template: `
    <div class="jumbotron">
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
                <div class="form-group">
                        <label for="firstName">Тема</label>
                        <input type="text" class="form-control" name="firstName"  />

                    </div>
                    <div class="form-group">
                        <label for="lastName">Повідомлення</label>
                        <input type="text" class="form-control"/>

                    </div>

                    <div class="form-group">
                        <button (click)="addStudent(student)" class="btn btn-primary">Надіслати</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    `
  })
  export class NgbdModalMessage {

    @Input() id;
    private alive = true;
    errorMessage = '';
    public student: Student = new Student;
    constructor(public activeModal: NgbActiveModal) {}
  }

