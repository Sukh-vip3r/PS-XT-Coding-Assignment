import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-filter-chip',
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterChipComponent),
      multi: true
    }
  ]
})
export class FilterChipComponent implements OnInit, ControlValueAccessor {

  @Input() disabled = false;
  @Input() value: any;
  @Input() label: string;
  @Input() checked = false;

  private selected: boolean;
  uniqueId: string;

  constructor() { }

  ngOnInit(): void {
    this.uniqueId = `${this.label}_${this.value}_${new Date().getTime()}`;
  }

  onChange: any = (selection: any) => { };
  onTouched: any = () => { };


  writeValue(selection: boolean): void {
    this.selected = selection;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue(event: Event): void {
    this.selected = event && event.target && event.target['checked'];
    this.onChange(this.selected);
  }
}
