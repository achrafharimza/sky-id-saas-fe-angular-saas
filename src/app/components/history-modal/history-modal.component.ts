import { SkyIdHistory } from './../../model/sky-id-history';
import { ApiUrl } from '../../../assets/Apiurl';
import { APIhistory } from './../../model/apihistory';
import { SkyDocumentAnalysisService } from './../../service/sky-document-analysis.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';
// import { MermaidAPI } from 'ngx-markdown';


@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
  styleUrls: ['./history-modal.component.scss']
})
export class HistoryModalComponent implements OnInit {
  history: APIhistory;
  sky_id: SkyIdHistory;
  image:string;
  size: NzDescriptionsSize = 'small';
  
  ApiURL = new ApiUrl;
  url = this.ApiURL.getUrl();
  src: any ;
  distance:any;
  numbertest=77;
  constructor(private SDA: SkyDocumentAnalysisService) { 

  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.history.output = JSON.parse(this.history.output);
  //   this.sky_id.output = JSON.parse(this.sky_id.output);  }


    ngAfterViewInit() {


if(this.sky_id){
  this.sky_id.output = JSON.parse(this.sky_id.output); 

  console.log(this.sky_id.output.similarity)
  console.log(this.sky_id.output.multi_response_data.doc_1.response_data.distance)
this.distance=((1-this.sky_id.output.multi_response_data.doc_1.response_data.distance)*100).toFixed(0) ;
console.log(this.distance)

}
if(this.history){
  this.history.output = JSON.parse(this.history.output);

}

   
    }


 // this.history[i].output = JSON.parse(this.history[i].output);
  ngOnInit(): void {
    console.log(this.history);
    console.log(this.sky_id);
    // this.sky_id.output = JSON.parse(this.sky_id.output);
  }

}
