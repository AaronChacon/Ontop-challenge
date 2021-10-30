import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ITheme } from 'src/app/core/interfaces/basic.interfaces';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  theme: ITheme = 'light-theme';
  iconFilter:string = 'assets/img/icons/filter.svg';
  iconPlus:string = 'assets/img/icons/plus.svg';
  arrow_down:string = 'assets/img/icons/arrow_down.svg';
  trash:string = 'assets/img/icons/trash.svg';
  search:string = 'assets/img/icons/search.svg';
  calendar:string = 'assets/img/icons/calendar.svg';


  clientData: any[] = [
    {
      company: 'Ontop',
      contracts: [
        {
          id: 1,
          imgUrl: '',
          name: 'Darlene Robertson',
          type: 'traditional',
          start_date: 23/10/2020,
          amount:  200,
          status: 'active'
        }
      ],
    },
  ]



  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  initializeTheme(): void {
    this.renderer.addClass(this.document.body, this.theme);
  }

}
