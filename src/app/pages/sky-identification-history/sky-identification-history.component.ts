import { SkyIdHistory } from './../../model/sky-id-history';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SkyIdentificationService } from './../../service/sky-identification.service';
import { APIhistory } from './../../model/apihistory';
import { HistoryModalComponent } from './../../components/history-modal/history-modal.component';
import { Component, OnInit, ViewContainerRef, Output } from '@angular/core';

@Component({
  selector: 'app-sky-identification-history',
  templateUrl: './sky-identification-history.component.html',
  styleUrls: ['./sky-identification-history.component.scss']
})
export class SkyIdentificationHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
