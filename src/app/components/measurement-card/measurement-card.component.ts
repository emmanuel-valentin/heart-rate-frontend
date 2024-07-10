import { Component, OnDestroy, OnInit } from '@angular/core';
import { Measurement } from '../../interfaces/measurement.interface';
import { MeasurementService } from '../../services/measurement.service';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-measurement-card',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './measurement-card.component.html',
  styles: ``
})
export class MeasurementCardComponent implements OnInit, OnDestroy {
  public measurement: Measurement = {
    bpmAvg: 0.0,
    delta: 0.0
  }

  constructor(private readonly measurementService: MeasurementService) { }

  ngOnInit(): void {
    this.measurementService.getMeasurement().subscribe((measurement) => {
      this.measurement = measurement;
    })
  }

  ngOnDestroy(): void {
    this.measurementService.measurement$.unsubscribe();
  }
}
