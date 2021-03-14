import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { validateArray } from 'src/app/shared/util/array-validator.util';
import { sanitizeObject, validateObject } from 'src/app/shared/util/sanitize-object.util';
import { Launch } from '../../models/launch';
import { HomeService } from '../../services/home.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  launches: Launch[];
  loader = false;
  private _filters: any = {};

  constructor(private hoemService: HomeService, @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.fetchLaunches();
    }
  }


  set filters(payload) {
    if (validateObject(payload)) {
      this._filters = {
        ...this._filters,
        ...payload
      };
    }
  }

  get filters(): any {
    return sanitizeObject(this._filters);
  }


  handleFiltersChanged(filter): void {
    this.filters = filter;
    this.fetchLaunches();
  }

  async fetchLaunches(): Promise<void> {
    try {
      this.loader = true;
      const resp = await this.hoemService.getLaunches({ limit: 100, ...this.filters });
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
