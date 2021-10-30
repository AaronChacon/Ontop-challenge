import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'ontop-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo:string = 'assets/img/default/logo.png';
  arrow_down:string = '../../../assets/img/icons/arrow_down.svg';
  userImg:string = '../../../assets/img/default/user.png';

  menuInfo:any = [
    {
      icon: '../../../assets/img/icons/user.svg',
      name:'Contracts',
      router: '/contracts'
    },
    {
      icon: '../../../assets/img/icons/document.svg',
      name:'Documents',
      router: '/documents'
    },
    {
      icon: '../../../assets/img/icons/pay.svg',
      name:'Payout',
      router: '/payout'
    },
    {
      icon: '../../../assets/img/icons/calendar.svg',
      name:'Time',
      router: '/time'
    }
  ]
  userSelect:any = [
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
