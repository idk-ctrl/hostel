import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    public students: Student[] = [];
    constructor(private _studentService: StudentService) {}

    ngOnInit() {
        this._studentService.getResult().
            subscribe(
                data => {
                    this.students = data;
                }
            )
    }
}
