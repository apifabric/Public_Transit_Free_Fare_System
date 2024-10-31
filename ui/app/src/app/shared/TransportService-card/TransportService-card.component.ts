import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TransportService-card.component.html',
  styleUrls: ['./TransportService-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TransportService-card]': 'true'
  }
})

export class TransportServiceCardComponent {


}