import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './QualifyingReason-card.component.html',
  styleUrls: ['./QualifyingReason-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.QualifyingReason-card]': 'true'
  }
})

export class QualifyingReasonCardComponent {


}