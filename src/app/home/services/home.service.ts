import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Launch } from '../models/launch';

@Injectable()
export class HomeService {

  private BASE_URL = environment.SPACE_X_BASE_URL;
  private GET_LAUNCHES = `${this.BASE_URL}launches`;

  constructor(private http: HttpClient) {
  }

  getLaunches(params): Promise<Launch[]> {
    return this.http.get<Launch[]>(this.GET_LAUNCHES, { params }).pipe(map(resp => resp.map(launch => new Launch(launch)))).toPromise();
  }


}
