import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ontop-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo:string = 'assets/img/default/logo.png';
  arrow_down:string = '../../../assets/img/icons/arrow_down.svg';
  userImg:string = '../../../assets/img/default/user.svg';

  menuInfo:any = [
    {
      icon: '../../../assets/img/icons/user.svg',
      name:'Contracts'
    },
    {
      icon: '../../../assets/img/icons/document.svg',
      name:'Documents'
    },
    {
      icon: '../../../assets/img/icons/pay.svg',
      name:'Payout'
    },
    {
      icon: '../../../assets/img/icons/calendar.svg',
      name:'Time'
    }
  ]
  userSelect:any = [
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
