import {Component, Input} from '@angular/core';
import { Contractor } from 'src/app/core/interfaces/basic.interfaces';

@Component({
  selector: 'ontop-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['contractorName', 'type', 'startDate', 'amount', 'status', 'actions'];
  @Input() dataSource: Contractor[] = [];

  constructor() {

  }




}
