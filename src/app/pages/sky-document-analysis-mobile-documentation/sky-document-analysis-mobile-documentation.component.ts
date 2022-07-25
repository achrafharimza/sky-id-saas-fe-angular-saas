import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-sky-document-analysis-mobile-documentation',
  templateUrl: './sky-document-analysis-mobile-documentation.component.html',
  styleUrls: ['./sky-document-analysis-mobile-documentation.component.scss']
})
export class SkyDocumentAnalysisMobileDocumentationComponent implements OnInit {

  position: NzTabPosition = 'left';

  plateformes = [
    {
      icon: 'android' ,
      plateforme: 'Android (java)',
      supported: `yes`,
      middleware: 'NA (native)'
    },
    {
      icon: 'apple' ,
      plateforme: 'IOS (swift)',
      supported: `yes`,
      middleware: 'NA (native)'
    },
    {
      icon: 'apple' ,
      plateforme: 'IOS (Objective-c)',
      supported: `yes`,
      middleware: 'Sub Connecteur Sky ID (Objective-c) '
    },
    {

      plateforme: 'Flutter',
      supported: `yes`,
      middleware: 'NA (native)'
    },
    {
      plateforme: 'Ionic',
      supported: `yes`,
      middleware: 'Sub Connecteur Sky ID (Cordova)'
    },
    {
      plateforme: 'React Native',
      supported: `yes`,
      middleware: 'Sub Connecteur Sky ID (Module JS)'
    },
    {
      plateforme: 'PhoneGap',
      supported: `yes`,
      middleware: 'Sub Connecteur Sky ID (Cordova)'
    },
    {
      plateforme: 'Framework 7',
      supported: `yes`,
      middleware: 'Sub Connecteur Sky ID (Cordova)'
    },
    {
      plateforme: 'Codenameone',
      supported: `yes`,
      middleware: 'Sub Connecteur Sky ID (CodeNameOne)'
    },
    {
      plateforme: 'Xamarin',
      supported: `No`,
      middleware: 'NA'
    },
  ];

  SDA_af_Code1: string = `
    import com.indatacore.skyAnalytics.skyID.DocumentAnalyzer;
    String Token = “xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx”
    Intent intent = new Intent(this, DocumentAnalyzer.class);
    intent.putExtra("Token", Token);
    intent.putExtra("Language", Language.ENGLISH.getISO());
    intent.putExtra("Country", Country.MOROCCO.getISO());
    intent.putExtra("requestCode", DocumentAnalyzer.RequestCode);
    intent.putExtra("ServiceID", service_id);
    startActivityForResult(intent, DocumentAnalyzer.RequestCode);
  `;

  SDA_af_Code2: string = `
  String response;
  protected void onActivityResult(int requestCode, int resultCode, Intent data) {
          super.onActivityResult(requestCode, resultCode, data);
          if (requestCode == DocumentAnalyzer.RequestCode) {
              if(resultCode == DocumentAnalyzer.RESULT_OK){
                  String StatusCode = data.getStringExtra("StatusCode");
                  String StatusLabel = data.getStringExtra("StatusLabel");
                  String RequestedInformations = data.getStringExtra("RequestedInformations");
                  String RequestedFiles = data.getStringExtra("RequestedFiles");
              } else if (resultCode == DocumentAnalyzer.RESULT_Not_OK) {
                  String StatusCode = data.getStringExtra("StatusCode");
                  String StatusLabel = data.getStringExtra("StatusLabel");
              }
          }
  }
  `;

  SDA_af_Code3: string = `
  StatusCode: “XXX”
  StatusLabel: “xxxxxxxxxxxxxxxxxxxxxxxxx”
  //1. CIN Document
  // json contenant toutes les informations extraites
  RequestedInformations: {"cin_id":"xxx", "father_name":"xxx","mother_name":"xxx",
  "address":"xxx","register_civil":"xxx","sexe":"X","first_name":"xxx","last_name":"xxx","birth_date":"dd.mm.yyyy","birth_place":"xxx","validity_date":"dd.mm.yyyy"}
  // json contenant toutes les informations extraites via OCR
  OCRBasedRequestedInformations: {...}
  // json contenant toutes les informations extraites via NFC
  NFCBasedRequestedInformations: {...}
  // Chemins absolus des fichiers extraits (images des documents et du visage)
  RequestedFiles: {"DocumentFrontSideFile":"xxx", "DocumentBackSideFile":"xxx", "FaceFile_1":"xxx", "FaceFile_2":"xxx", ...}
  // Chemins absolus des fichiers extraits via OCR (images des documents et du visage)
  OCRBasedRequestedFiles: {...}
  // Chemins absolus des fichiers extraits via NFC (images des documents et du visage)
  NFCBasedRequestedFiles: {...}
  //2. Passport Document
  RequestedInformations: {"cin_id":"xxx","nationality":"xxx","validity_date":"dd-mm-yy","birth_date":"dd-mm-yy", "document_number":"xxx","sex":"X","issuing_country":"xxx","first_name":"xxx","last_name":"xxx"}
  // json contenant toutes les informations extraites via OCR
  OCRBasedRequestedInformations: {...}
  // json contenant toutes les informations extraites via NFC
  NFCBasedRequestedInformations: {...}
  // Chemins absolus des fichiers extraits (images des documents et du visage)
  RequestedFiles: {"DocumentFrontSideFile":"xxx", "FaceFile_1":"xxx", "FaceFile_2":"xxx", ...}
  // Chemins absolus des fichiers extraits via OCR (images des documents et du visage)
  OCRBasedRequestedFiles: {...}
  // Chemins absolus des fichiers extraits via NFC (images des documents et du visage)
  NFCBasedRequestedFiles: {...}
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
