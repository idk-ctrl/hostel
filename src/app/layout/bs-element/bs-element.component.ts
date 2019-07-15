import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Personal } from 'src/app/core/models/personal.model';
import { PersonalService } from 'src/app/core/services/personal.service';

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
    animal: string;
    name: string; // dlt
    id: number;
    public isSelected = false;
    public personals: Personal[] = [];
    public personal = new Personal;
    public row: number;
    private alive = true;
    errorMessage = '';
    public searchText;
    constructor(private _personalService: PersonalService) { }
    ngOnInit() {
        this.row = 0;
        this.getPersonal();
    }

    private getPersonal(): void {
        this._personalService.getResult().
            subscribe(
                data => {
                    this.personals = data;
                    console.log( 'personals', this.personals);
                }
            );
    }

    public dropStudent(id: number): any {
        return 1;
    }
    public onSelect(id: number): any {
        return 1;
    }

    public updateHospital(id: number): any {
        return 1;
    }
}
