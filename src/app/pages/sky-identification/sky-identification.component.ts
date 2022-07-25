import { SkyIdentificationService } from './../../service/sky-identification.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Component, OnInit, Output } from '@angular/core';
// import {WebcamImage} from 'ngx-webcam';
// import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sky-identification',
  templateUrl: './sky-identification.component.html',
  styleUrls: ['./sky-identification.component.scss']
})
export class SkyIDentificationComponent implements OnInit {

 

 
  constructor() { }

  ngOnInit(): void {
  }
}
