import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-spacex-detail',
  templateUrl: './spacex-detail.component.html',
  styleUrls: ['./spacex-detail.component.scss']
})
export class SpacexDetailComponent implements OnInit {

  @Input() launch: Launch;
  
  constructor() { }

  ngOnInit(): void {
  }

}
