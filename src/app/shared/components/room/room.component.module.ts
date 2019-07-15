import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomComponent } from './room.component';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [RoomComponent],
    exports: [RoomComponent]
})
export class RoomViewModule {}