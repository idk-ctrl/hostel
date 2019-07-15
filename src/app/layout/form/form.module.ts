import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent, NgbdModalRoom } from './form.component';
import { PageHeaderModule } from './../../shared';
import { HoverImageRoomDirective } from 'src/app/shared/directives/hover-image-room.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,NgbModule],
    entryComponents: [NgbdModalRoom],
    declarations: [FormComponent, HoverImageRoomDirective,NgbdModalRoom]
})
export class FormModule {}
