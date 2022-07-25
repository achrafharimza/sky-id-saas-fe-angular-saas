import { Router } from '@angular/router';
import { HistoryModalComponent } from './../history-modal/history-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { APIhistory } from './../../model/apihistory';
import { SkyDocumentAnalysisService } from './../../service/sky-document-analysis.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-sky-document-analysis-history',
  templateUrl: './sky-document-analysis-history.component.html',
  styleUrls: ['./sky-document-analysis-history.component.scss']
})
export class SkyDocumentAnalysisHistoryComponent implements OnInit {

  isVisible = false;
  total:number;
  image: string;
  imag: any;
  page: number = 1;
  limit: number = 5;
  status = "response_data";
  errMessage:string;
  listOfCurrentPageData: readonly APIhistory[] = [];

  history: APIhistory[] = [];
  constructor(private SDA: SkyDocumentAnalysisService,
              private modal: NzModalService,
              private viewContainerRef: ViewContainerRef,
              private router : Router) { }

  ngOnInit(): void {
    this.getHistory();
    // this.history = this.listOfCurrentPageData;
  }

  onCurrentPageDataChange($event: readonly APIhistory[]): void {
    this.listOfCurrentPageData = $event;
    // this.refreshCheckedStatus();
  }

  // ngAfterViewInit() {
  //   // this.getHistory();
  // }

  checkstatus(i: any) : boolean{
    // console.log(this.sky_id[i].output.includes(this.status));
    let check = this.history[i].output;
    return check.includes(this.status);
  }

  nextPage($event: any) {
    this.getHistory();
  }

  doSearch(key: string): void {
    this.router.navigate(['/search', key]);
  }

  getHistory() {
    this.SDA.getDocument(this.page, this.limit).subscribe(
      {
        next: data => {
         


          this.history = data.list;
          this.total=data.size
          // console.log(this.history);
          // convert string to json

          // for (let i = 0; i < this.history.length; i++) {
          //   this.history[i].output = JSON.parse(this.history[i].output);
          // }
          // console.log(this.history[0].input.document_id);
          console.log(this.history);

          // this.image = this.history[0].input.document_id;
          // this.image = `http://192.168.1.5:9091/apiocr/file/${this.history[0].input.document_id}`
          // console.log(this.image);
        }
      }
    );
  }

 // create nzComponentParams

 // pass data to another component
  // passData(): void {
  //   this.modal.create({
  //     nzTitle: 'Modal Title',
  //     nzContent: HistoryModalComponent,
  //     nzViewContainerRef: this.viewContainerRef,
  //     nzComponentParams: {
  //       history: this.history,
  //       image: this.image
  //     }
  //   });
  // }


 createModal(i:any): void {
  // try{

    // this.history[i].output = JSON.parse(this.history[i].output);
  //   this.errMessage = "";
  // }catch(e){
  //   this.errMessage = "Error";
  // }
  
  this.modal.create({
    nzTitle: 'Sky Document Analysis History',
    nzContent: HistoryModalComponent,
    nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        history: this.history[i],
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

  // nzComponentParams(event: any) {

  //   console.log(event);
  // }


}
