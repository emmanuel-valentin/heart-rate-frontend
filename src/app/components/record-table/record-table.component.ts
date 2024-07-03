import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../services/record.service';
import { Record } from '../../interfaces/record.interface';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { delay } from 'rxjs';

@Component({
  selector: 'app-record-table',
  standalone: true,
  imports: [TableModule, ButtonModule, SkeletonModule, CommonModule, PanelModule],
  templateUrl: './record-table.component.html',
  styles: ``,
})
export class RecordTableComponent implements OnInit {
  public records: Record[] = [];
  public isLoading = false;
  constructor(private readonly recordService: RecordService) {}

  ngOnInit(): void {
    this.findRecords();
  }

  public findRecords(): void {
    this.isLoading = true;
    this.recordService
      .findAll()
      // .pipe(delay(5000))
      .subscribe((records) => {
        this.records = records
        this.isLoading = false;
      });
  }
}
