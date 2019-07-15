import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent, NgbdModalContent, NgbdModalEdit, NgbdModalMessage } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { RoomViewModule } from 'src/app/shared/components/room/room.component.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HoverImageDirective } from 'src/app/shared/directives/hover-image.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule,
      RoomViewModule, ReactiveFormsModule, FormsModule, Ng2SearchPipeModule, NgbModule],
    entryComponents: [NgbdModalContent, NgbdModalEdit, NgbdModalMessage],
    declarations: [TablesComponent, HoverImageDirective, NgbdModalContent, NgbdModalEdit, NgbdModalMessage],
})
export class TablesModule {}
