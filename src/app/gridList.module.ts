import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatGridListModule],
  exports: [MatGridListModule],
})
export class MaterialModule { }