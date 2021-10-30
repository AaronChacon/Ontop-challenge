import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }
