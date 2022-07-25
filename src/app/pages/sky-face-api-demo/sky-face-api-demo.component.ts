import { SkyIdentificationService } from './../../service/sky-identification.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Component, OnInit, Output } from '@angular/core';
// import {WebcamImage} from 'ngx-webcam';
// import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sky-face-api-demo',
  templateUrl: './sky-face-api-demo.component.html',
  styleUrls: ['./sky-face-api-demo.component.scss']
})
export class SkyFaceApiDemoComponent implements OnInit {

  showWebcam = false;
  checked = false;
  isCameraExist = true;

  showLoding: boolean = false;
  previewImage: string | undefined = '';
  previewVisible = false;
  imageSrc: string;
  selectedValue = '';
  typeval: any;
  confirmed = false;
  confirme = false;
  errMsg: string;

  skyDocument: FormGroup;

  constructor(private fb: FormBuilder, private skyid: SkyIdentificationService) { }

 

  ngOnInit(): void {
    this.skyDocument = this.fb.group({
      avatar1: [''],
      avatar: [''],
    });
  }

  public webcamImage: WebcamImage;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
   this.trigger.next();
   this.isCameraExist = false;
  }

  repeat(){
    this.showWebcam = true;
    this.isCameraExist = true;
    this.webcamImage = null;
  }

  confirm(){
    this.confirmed = true;
  }

  confrm(){
    this.confirme = true;
  }

  handleImage(webcamImage: WebcamImage): void {
   console.info('Saved webcam image', webcamImage);
   this.webcamImage = webcamImage;
   const arr = this.webcamImage.imageAsDataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], 'image.jpeg', { type: mime });

    console.log(file);
    this.skyDocument.patchValue({
      avatar1: file,
    });
   
  }
 

  public get triggerObservable(): Observable<void> {
   return this.trigger.asObservable();
  }

  showImage(){
    this.showWebcam = true;
    this.isCameraExist = true;
  }

  // public webcamImage: WebcamImage = null;
  // handleImage(webcamImage: WebcamImage) {
  // this.webcamImage = webcamImage;
  // }


  // webcamImage: WebcamImage | undefined | null  // public webcamImage: WebcamImage = null;
  // // webcamImag: WebcamImage | undefined;

  // handleImage(webcamImage: WebcamImage) {
  //   this.webcamImage = webcamImage;
  // }

  uploadFile(event: any) {
    const reader = new FileReader();
    const file = (event.target as HTMLInputElement).files[0];
    console.log(typeof file);

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    }

    console.log(file);
    
    this.skyDocument.patchValue({
      avatar: file,
    });
    this.skyDocument.get('avatar').updateValueAndValidity();
  }

  submitForm() {
    this.showLoding = true;
    var formData: any = new FormData();
    formData.append('selfie', this.skyDocument.get('avatar1').value );
    console.log(typeof this.skyDocument.get('avatar1').value);
    
    // console.log(`{'doc_type':'${this.skyDocument.get('type').value}'}`);
    // http://192.168.1.38:9091/apiocr/read
    formData.append('document', this.skyDocument.get('avatar').value);
    console.log(typeof this.skyDocument.get('avatar').value);
    
    this.skyid.compare(formData).subscribe(
      {
        next: (data : any) => {
          this.selectedValue = data.multi_response_data.doc_1.response_data,
          console.log(data);
          
        },
        error: (error) => {
          console.log(error)
          this.errMsg = "Error occured while comparing";
        },
      }
    );
  }

}
