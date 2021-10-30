import {AfterViewInit, Component, ViewChild} from '@angular/core';



export interface ContractsList {
  id: number;
  contractorName: string;
  imgUrl: string;
  type: string;
  startDate: string;
  amount: number;
  status: string;
}

const ELEMENT_DATA: ContractsList[] = [
  {
    id: 1,
    contractorName: 'Darlene Robertson',
    imgUrl: 'assets/img/default/user.png',
    type: 'Traditional',
    startDate: 'Mar 4, 2021',
    amount: 200,
    status: 'active',
  },
  {
    id: 2,
    contractorName: 'Darlene Robertson',
    imgUrl: 'assets/img/default/user1.png',
    type: 'Traditional',
    startDate: 'Mar 4, 2021',
    amount: 200,
    status: 'signature pending',
  },
  {
    id: 3,
    contractorName: 'Darlene Robertson',
    imgUrl: 'assets/img/default/user2.png',
    type: 'Traditional',
    startDate: 'Mar 4, 2021',
    amount: 1200,
    status: 'active',
  },
];


@Component({
  selector: 'ontop-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['contractorName', 'type', 'startDate', 'amount', 'status', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() {}




}
