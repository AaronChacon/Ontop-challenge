import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ITheme } from 'src/app/core/interfaces/basic.interfaces';
@Component({
  selector: 'ontop-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo:string = 'assets/img/default/logo.png';
  userImg:string = 'assets/img/default/user.png';
  theme: ITheme = 'dark-theme';
  menu: boolean = true;

  menuInfo:any = [
    {
      icon: 'icon-user',
      name:'Contracts',
      router: '/contracts'
    },
    {
      icon: 'icon-document',
      name:'Documents',
      router: '/documents'
    },
    {
      icon: 'icon-pay',
      name:'Payout',
      router: '/payout'
    },
    {
      icon: 'icon-calendar',
      name:'Time',
      router: '/time'
    }
  ]

  userSelect:any = [
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

  switchThemes(){
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

}
