import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CitizenFeedback-card.component.html',
  styleUrls: ['./CitizenFeedback-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CitizenFeedback-card]': 'true'
  }
})

export class CitizenFeedbackCardComponent {


}