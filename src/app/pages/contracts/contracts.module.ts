import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';

import { ContractsComponent } from './contracts.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardDescriptionComponent } from 'src/app/components/card-description/card-description.component';


@NgModule({
  declarations: [
    ContractsComponent,
    TableComponent,
    CardComponent,
    DropdownComponent,
    PaginatorComponent,
    FilterComponent,
    CardDescriptionComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ContractsModule { }
