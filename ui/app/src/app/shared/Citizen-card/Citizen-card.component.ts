import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Citizen-card.component.html',
  styleUrls: ['./Citizen-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Citizen-card]': 'true'
  }
})

export class CitizenCardComponent {


}