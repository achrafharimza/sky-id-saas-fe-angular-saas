import { Component, OnInit } from '@angular/core';
import { Skyfaceweb } from 'src/app/model/skyfaceweb';
import { SkyFaceService } from 'src/app/service/sky-face.service';
import { ApiUrl } from 'src/assets/Apiurl';

@Component({
  selector: 'app-sky-face-web-history',
  templateUrl: './sky-face-web-history.component.html',
  styleUrls: ['./sky-face-web-history.component.scss']
})
export class SkyFaceWebHistoryComponent implements OnInit {
  constructor(private skyFaceService:SkyFaceService) { }


  isVisible = false;
  total:number;
  image: string;
  errMessage: string;
  imag: any;
  page: number = 1;
  limit: number = 5;
  Skaylist: Skyfaceweb[] = [];
  isVisibleMiddle = false;
  modaldata:Skyfaceweb;
  ApiURL = new ApiUrl;
  url = this.ApiURL.getUrl();
  
  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.skyFaceService.getHistory(this.page, this.limit).subscribe(
       data => {
           this.Skaylist = data.list;
           this.total=data.size
             
      }
    );
  }
  nextPage($event: any) {
    this.getHistory();
  }
  showModalMiddle(data:Skyfaceweb): void {
    this.isVisibleMiddle = true;
    this.modaldata=data;
  }


  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
