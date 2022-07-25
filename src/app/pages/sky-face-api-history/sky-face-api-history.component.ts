import { SkyIdHistory } from './../../model/sky-id-history';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SkyIdentificationService } from './../../service/sky-identification.service';
import { APIhistory } from './../../model/apihistory';
import { HistoryModalComponent } from './../../components/history-modal/history-modal.component';
import { Component, OnInit, ViewContainerRef, Output } from '@angular/core';
@Component({
  selector: 'app-sky-face-api-history',
  templateUrl: './sky-face-api-history.component.html',
  styleUrls: ['./sky-face-api-history.component.scss']
})
export class SkyFaceApiHistoryComponent implements OnInit {

  isVisible = false;
  total:number;
  image: string;
  errMessage: string;
  imag: any;
  page: number = 1;
  limit: number = 5;
  status = "\",\"status_code\":\"000\"";
  // regex = /status_code\":\"000\"/;
  sky_id: SkyIdHistory[] = [];
  constructor(private skyid: SkyIdentificationService,
              private modal: NzModalService,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.getHistory();
  }

  nextPage($event: any) {
    this.getHistory();
  }


  getHistory() {
    this.skyid.getHistory(this.page, this.limit).subscribe(
       data => {
           this.sky_id = data.list;
           this.total=data.size
           console.log("data.values");
           console.log(data.list);
           console.log(data.size);
          console.log(this.sky_id);
          
          // for (let i = 0; i < this.sky_id.length; i++) {
          //   this.sky_id[i].output = JSON.parse(this.sky_id[i].output);
          // }
        
      }
    );
  }

  checkstatus(i: any) : boolean{
    // console.log(this.sky_id[i].output.includes(this.status));
    return this.sky_id[i].output.includes(this.status);
  }


 createModal(i:any): void {
  // console.log('-----------');
  
  // console.log(this.sky_id[i].output.includes(this.status));
  // console.log('-----------');
  // this.sky_id[i].output;
  // try{
  //  this.sky_id[i].output = JSON.parse(this.sky_id[i].output);
  //   this.errMessage = "";
  // }catch(e){
  //   this.errMessage = "Error";
  // }

  


  this.modal.create({
    nzTitle: 'Sky Face Analysis History',
    nzContent: HistoryModalComponent,
    nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        sky_id: this.sky_id[i],
      },
    nzClosable: false,
    nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
  });
}


  showModal2(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }


}
