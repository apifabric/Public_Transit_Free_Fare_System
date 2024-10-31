import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Registration-card.component.html',
  styleUrls: ['./Registration-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Registration-card]': 'true'
  }
})

export class RegistrationCardComponent {


}