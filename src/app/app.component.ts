import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecordTableComponent } from './components/record-table/record-table.component';
import { MeasurementCardComponent } from './components/measurement-card/measurement-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RecordTableComponent,
    MeasurementCardComponent
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private readonly primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
