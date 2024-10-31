import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceDriver-card.component.html',
  styleUrls: ['./ServiceDriver-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceDriver-card]': 'true'
  }
})

export class ServiceDriverCardComponent {


}