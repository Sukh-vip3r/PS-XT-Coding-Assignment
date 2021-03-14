import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input() title: string;
  @Input() filters: any[];
  @Output() selectionChange: EventEmitter<string[]> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }



}
