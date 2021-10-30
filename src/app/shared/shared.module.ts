import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from '../components/table/table.component';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
