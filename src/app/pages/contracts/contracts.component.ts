import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ClientData, ITheme } from 'src/app/core/interfaces/basic.interfaces';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  theme: ITheme = 'light-theme';
  iconFilter:string = 'assets/img/icons/filter.svg';
  iconPlus:string = 'assets/img/icons/plus.svg';

  clientData: ClientData[] = [
    {
      id: 1,
      company: 'Ontop',
      contracts: [
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
      ],
    },
  ]



  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {

  }

  ngOnInit(): void {
    this.initializeTheme();
  }

  initializeTheme(): void {
    this.renderer.addClass(this.document.body, this.theme);
  }

}
