import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Measurement } from '../interfaces/measurement.interface';
import { io } from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeasurementService {
  public measurement$ = new BehaviorSubject<Measurement>({} as Measurement);
  private socket = io(environment.apiUrl);

  constructor() {}

  public getMeasurement(): Observable<Measurement> {
    this.socket.on('measurement', (measurement: Measurement) => {
      this.measurement$.next(measurement);
    })

    return this.measurement$.asObservable();
  }
}
