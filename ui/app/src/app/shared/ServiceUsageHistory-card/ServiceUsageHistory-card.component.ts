import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceUsageHistory-card.component.html',
  styleUrls: ['./ServiceUsageHistory-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceUsageHistory-card]': 'true'
  }
})

export class ServiceUsageHistoryCardComponent {


}