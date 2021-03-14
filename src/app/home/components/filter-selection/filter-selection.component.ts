import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filter-selection',
  templateUrl: './filter-selection.component.html',
  styleUrls: ['./filter-selection.component.scss']
})
export class FilterSelectionComponent implements OnInit {

  @Input() filters: any[];
  @Output() selectionChange: EventEmitter<string> = new EventEmitter();

  selection = new FormArray([]);
  selectedValue: string[] = [];
  formSubscription: Subscription;


  constructor() { }

  ngOnInit(): void {
    this.filters.map(item => this.addControl(item.value));
    this.subscribeToFormArray();
  }


  addControl(controlName: string) {
    this.selection.push(new FormControl(false))
  }


  subscribeToFormArray() {
    this.formSubscription = this.selection.valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe((items) => {
      let selectedValues = [];
      for (let index in items) {
        if (items[index]) {
          selectedValues.push(this.filters[index]['value']);
        }
      }
      this.selectionChange.emit(selectedValues.toString());
    })
  }


}
