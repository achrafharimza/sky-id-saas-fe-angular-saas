import { HttpClient } from '@angular/common/http';
import { SkyDocumentAnalysisService } from './../../service/sky-document-analysis.service';
import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup } from '@angular/forms';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-sky-document-analysis',
  templateUrl: './sky-document-analysis.component.html',
  styleUrls: ['./sky-document-analysis.component.scss']
})
export class SkyDocumentAnalysisComponent implements OnInit {
  size: 'small' | 'middle' | 'large' | number = 'small';
  showLoding: boolean = false;
 
  previewImage: string | undefined = '';
  previewVisible = false;
  imageSrc: string;
  selectedValue = '';
  typeval: boolean = false;
show: boolean = false;
  skyDocument: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private SDA: SkyDocumentAnalysisService) {
    this.skyDocument = this.fb.group({
      type: [''],
      avatar: [null],
    });
  }

  ngOnInit(): void {
  }

  checkval(){
this.typeval = true;
// this.selectedValue = ;
  }

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);

    }
    this.previewImage = file.url || file.preview;
    console.log(file.preview);

    this.previewVisible = true;
  };

  // slec(){
  //   this.typeval = this.skyDocument.get('type').value;
  // }

  // file(){
  //   let formdt = new FormData();
  //   formdt.append('request_data', `{'doc_type':'${this.selectedValue}'}`)
  //   // formdt.append('document', )
  // }
  uploadFile(event: any) {
    this.show = true;
    const reader = new FileReader();
    const file = (event.target as HTMLInputElement).files[0];
    console.log(typeof file);

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    }
    this.skyDocument.patchValue({
      avatar: file,
    });
    this.skyDocument.get('avatar').updateValueAndValidity();
  }

  submitForm() {
    this.showLoding = true;
    var formData: any = new FormData();
    formData.append('request_data', `${this.skyDocument.get('type').value}` );
    // console.log(`{'doc_type':'${this.skyDocument.get('type').value}'}`);
    // http://192.168.1.38:9091/apiocr/read
    formData.append('document', this.skyDocument.get('avatar').value);
    this.SDA.addDocument(formData).subscribe(
      {
        next: (data : any) => this.selectedValue = data.response_data,
        error: (error) => console.log(error),
      }
    );
    // this.http
    //   .post('http://192.168.1.5:9091/apiocr/read', formData)
    //   .subscribe({
    //     next: (data : any) => this.selectedValue = data.response_data,
    //     error: (error) => console.log(error),
    //   });
  }


}
