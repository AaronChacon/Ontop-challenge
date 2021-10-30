import { Component, Input, OnInit } from '@angular/core';
import { Contractor } from 'src/app/core/interfaces/basic.interfaces';




@Component({
  selector: 'ontop-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss']
})

export class CardDescriptionComponent implements OnInit {

  @Input()
  contractorData!: Contractor;

  constructor() {
  }

  ngOnInit(): void {
  }

}
