import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceSchedule-card.component.html',
  styleUrls: ['./ServiceSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceSchedule-card]': 'true'
  }
})

export class ServiceScheduleCardComponent {


}