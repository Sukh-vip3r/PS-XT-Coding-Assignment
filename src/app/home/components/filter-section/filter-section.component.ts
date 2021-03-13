import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input() title: string;
  @Input() filters: any[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
