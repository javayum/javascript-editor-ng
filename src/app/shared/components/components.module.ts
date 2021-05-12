import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBoxComponent } from './codebox/code-box.component';



@NgModule({
  declarations: [
    CodeBoxComponent
  ],
  exports: [
    CodeBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
