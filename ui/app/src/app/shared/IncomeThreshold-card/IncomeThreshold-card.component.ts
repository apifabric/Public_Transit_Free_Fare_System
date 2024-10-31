import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './IncomeThreshold-card.component.html',
  styleUrls: ['./IncomeThreshold-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.IncomeThreshold-card]': 'true'
  }
})

export class IncomeThresholdCardComponent {


}