import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdGridListModule,
  MdIconModule,
  MdSnackBarModule,
  MdMenuModule,
  MdProgressBarModule,
  MdTableModule
 } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdIconModule,
    MdSnackBarModule,
    MdMenuModule,
    MdProgressBarModule,
    MdTableModule
    ],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdIconModule,
    MdSnackBarModule,
    MdMenuModule,
    MdProgressBarModule,
    MdTableModule
    ]
})
export class CustomMaterialModule { }