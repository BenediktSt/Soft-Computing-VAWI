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
  MdProgressBarModule } from '@angular/material';

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
    MdProgressBarModule
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
    MdProgressBarModule
    ]
})
export class CustomMaterialModule { }