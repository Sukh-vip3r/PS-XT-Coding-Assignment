import { Component, OnInit } from '@angular/core';
import { validateArray } from 'src/app/shared/util/array-validator.util';
import { sanitizeObject, validateObject } from 'src/app/shared/util/sanitize-object.util';
import { Launch } from '../../models/launch';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  launches: Launch[];
  loader = false;
  private _filters: any = {};

  constructor(private hoemService: HomeService) { }

  ngOnInit(): void {
    this.fetchLaunches();
  }


  set filters(payload) {
    if (validateObject(payload)) {
      this._filters = {
        ...this._filters,
        ...payload
      }
    }
  }

  get filters() {
    return sanitizeObject(this._filters);
  }


  handleFiltersChanged(filter) {
    this.filters = filter;
    this.fetchLaunches();
  }

  async fetchLaunches() {
    try {
      this.loader = true;
      let resp = await this.hoemService.getLaunches({ limit: 100, ...this.filters });
      if (validateArray(resp)) {
        this.launches = resp;
      } else {
        this.launches = [];
      }
      this.loader = false;
    } catch (err) {
      this.launches = [];
      this.loader = false;
      console.error(err);
    }
  }

}
