import { Component, OnInit } from '@angular/core';
//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { DealRecordService } from '../service/dealrecord.service';

//import class
import { DealRecord } from '../domain/dealrecord';

@Component({
  selector: 'app-deal-record',
  templateUrl: './deal-record.component.html',
  styleUrls: ['./deal-record.component.css'],
  providers: [DealRecordService]
})
export class DealRecordComponent implements OnInit {

  dealRecords: DealRecord[];
  selectedDealRecord: DealRecord;

  constructor(
    private dealRecordService: DealRecordService
  ) { }

  ngOnInit() {
    this.dealRecordService.getDealRecords()
    .then(dealRecords => this.dealRecords = dealRecords);
  }

  addDealRecord(itemName: string,buyerName: string): void {
    itemName = itemName.trim();
    buyerName = buyerName.trim();
    if (!name) { return; }
    this.dealRecordService.createDealRecordByName(name)
      .then(dealRecord => {
        this.dealRecords.push(dealRecord);
        this.selectedDealRecord = null;
      });
  }

  deleteDealRecord(dealRecord: DealRecord): void {
    this.dealRecordService
        .deleteDealRecordById(dealRecord.id)
        .then(() => {
          this.dealRecords = this.dealRecords.filter(h => h !== dealRecord);
          if (this.selectedDealRecord === dealRecord) { this.selectedDealRecord = null; }
        });
  }

}
