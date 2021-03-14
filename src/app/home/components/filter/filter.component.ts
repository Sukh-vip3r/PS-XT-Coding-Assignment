import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SUCCESSFUL_LANDING_FILTER, SUCCESSFUL_LAUNCH_FILTER, YEAR_FILTER } from 'src/app/shared/constant/filter.constant';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  yearFilter = YEAR_FILTER;
  launchFilter = SUCCESSFUL_LAUNCH_FILTER;
  landingFilter = SUCCESSFUL_LANDING_FILTER;
  @Output() filterChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onFilterApplied(keyName: string, values): void {
    this.filterChanged.emit({ [keyName]: values });
  }

}
