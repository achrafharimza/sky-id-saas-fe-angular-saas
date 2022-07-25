import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

import { Subject, Observable } from 'rxjs';
// import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sky-id-webcam',
  templateUrl: './sky-id-webcam.component.html',
  styleUrls: ['./sky-id-webcam.component.scss']
})
export class SkyIdWebcamComponent implements OnInit {

  // constructor() { }

  // // ngOnInit(): void {
  // // }

  // @Output()
  // public pictureTaken = new EventEmitter<WebcamImage>();
  // // toggle webcam on/off
  // public showWebcam = true;
  // public allowCameraSwitch = true;
  // public multipleWebcamsAvailable = false;
  // public deviceId: string;
  // public videoOptions: MediaTrackConstraints = {
  // // width: {ideal: 1024},
  // // height: {ideal: 576}
  // };
  // public errors: WebcamInitError[] = [];
  // // webcam snapshot trigger
  // private trigger: Subject<void> = new Subject<void>();
  // // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  // private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  // public ngOnInit(): void {
  // WebcamUtil.getAvailableVideoInputs()
  // .then((mediaDevices: MediaDeviceInfo[]) => {
  // this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
  // });
  // }
  // public triggerSnapshot(): void {
  // this.trigger.next();
  // }
  // public toggleWebcam(): void {
  // this.showWebcam = !this.showWebcam;
  // }
  // public handleInitError(error: WebcamInitError): void {
  // this.errors.push(error);
  // }
  // public showNextWebcam(directionOrDeviceId: boolean|string): void {
  // // true => move forward through devices
  // // false => move backwards through devices
  // // string => move to device with given deviceId
  // this.nextWebcam.next(directionOrDeviceId);
  // }
  // public handleImage(webcamImage: WebcamImage): void {
  // console.info('received webcam image', webcamImage);
  // this.pictureTaken.emit(webcamImage);
  // }
  // public cameraWasSwitched(deviceId: string): void {
  // console.log('active device: ' + deviceId);
  // this.deviceId = deviceId;
  // }
  // public get triggerObservable(): Observable<void> {
  // return this.trigger.asObservable();
  // }
  // public get nextWebcamObservable(): Observable<boolean|string> {
  // return this.nextWebcam.asObservable();
  // }



  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  constructor() { }


  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
}
