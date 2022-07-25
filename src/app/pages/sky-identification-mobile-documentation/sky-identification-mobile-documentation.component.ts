import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-sky-identification-mobile-documentation',
  templateUrl: './sky-identification-mobile-documentation.component.html',
  styleUrls: ['./sky-identification-mobile-documentation.component.scss']
})
export class SkyIDentificationMobileDocumentationComponent implements OnInit {

  position: NzTabPosition = 'left';

  Labels = [
    { label: 'first_name', value: 'first name' },
    { label: 'last_name', value: 'last name' },
    { label: 'address', value: 'address' },
    { label: 'birth_date', value: 'birth date' },
    { label: 'birth_place', value: 'birth place' },
    { label: 'cin_id', value: 'cin id' },
    { label: 'validity_date', value: 'validity date' },
    { label: 'father_name', value: 'father name' },
    { label: 'mother_name', value: 'mother name' },
    { label: 'sex', value: 'sex'},
  ];

  statusCode = [
    {
      status: `000`,
      discription: 'success'
    },
    {
      status: `001`,
      discription: 'Sky-001 : document size inside image is not valid'
    },
    {
      status: `002`,
      discription: 'Sky-002 : fuzzy image,please capture a clair image with auto-focus'
    },{
      status: `011`,
      discription: 'Sky-011 : face not detected in the document, please capture the integrale of the document'
    },
    {
      status: `012`,
      discription: 'Sky-012 : document content is not valid'
    },
    {
      status: `021`,
      discription: 'Sky-021 : fuzzy image,please capture a clair image with auto-focus'
    },
    {
      status: `022`,
      discription: 'Sky-022 : text not detected in the image,please capture a clair image with auto-focus'
    },
    {
      status: `023`,
      discription: 'Sky-023 : document text is not authentique'
    },
    {
      status: `900`,
      discription: 'Sky-900 : institution id not valid'
    },{
      status: `901`,
      discription: 'Sky-901 : application id not valid'
    },
    {
      status: `902`,
      discription: 'Sky-902 : channel id not valid'
    },
    {
      status: `903`,
      discription: 'Sky-903 : service id not valid or document type not supported in this service'
    },
    {
      status: `904`,
      discription: 'Sky-904 : sub service id not valid'
    },
    {
      status: `905`,
      discription: 'Sky-905 : token not valid'
    },
    {
      status: `906`,
      discription: 'Sky-906 : guid not valid'
    },
    {
      status: `907`,
      discription: 'Sky-907 : request parameters is not valid'
    },{
      status: `998`,
      discription: 'Sky-998 : image invalid, please send a valid document image in base64 format'
    },
    {
      status: `999`,
      discription: 'Sky-999 : invalide request'
    }
  ]

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
  import com.indatacore.skyAnalytics.skyID.FacebasedAuthenticator;
  String Token = “xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx”;
  Map<String, List<String>> DocumentFiles =new HashMap<>();
  List<String> doc1 = new ArrayList<>();
  doc1.add(“/path/path/xxxxxx_CINFront1.jpg”);
  doc1.add(“/path/path/xxxxxx_CINFront2.jpg”);
  List<String> doc2 = new ArrayList<>();
  doc2.add(“/path/path/xxxxxx_Passport1.jpg”);
  DocumentFiles.put("doc_2", doc2);
  Intent intent = new Intent(this, FacebasedAuthenticator.class);
  intent.putExtra("Token", Token);
  intent.putExtra("RequestCode", FacebasedAuthenticator.RequestCode);
  intent.putExtra("DocumentFiles", (Serializable) DocumentFiles);
  intent.putExtra("Language", Language.ENGLISH);
  startActivityForResult(intent, FacebasedAuthenticator.RequestCode);
  `;

  SDA_af_Code2: string = `
  String response;
  protected void onActivityResult(int requestCode, int resultCode, Intent data) {
      super.onActivityResult(requestCode, resultCode, data);
      if (requestCode == FacebasedAuthenticator.RequestCode) {
          if(resultCode == FacebasedAuthenticator.RESULT_OK){
            String StatusCode  = data.getStringExtra("StatusCode");
            String StatusLabel  = data.getStringExtra("StatusLabel");
            String SelfieFile = data.getStringExtra("SelfieFile");
            String sky_face_match_decision_code = data.getStringExtra("sky_face_match_decision_code");
            String sky_face_match_decision_label = data.getStringExtra("sky_face_match_decision_label");
            Map<String, String> sky_face_match_decision_codes_per_document = (Map<String, String>)
            data.getSerializableExtra("sky_face_match_decision_codes_per_document");
          } else if (resultCode == FacebasedAuthenticator.RESULT_Not_OK) {
             String StatusCode  = data.getStringExtra("StatusCode");
             String StatusLabel  = data.getStringExtra("StatusLabel");
          }
      }
  }
  `;

  SDA_af_Code3: string = `
  StatusCode: “XXX”
  StatusLabel: “xxxxxxxxxxxxxxxxxxxxxxxxx”
  SelfieFile: “/path/path/SelfieFile.jpg”
  sky_face_match_decision_code: “1”, “0” or “-1”
  sky_face_match_decision_label: “Accepted”, “To be verify” or “Rejected”
  sky_face_match_decision_codes_per_document: sky_face_match_decision_code of each doc
  `;

  SDA_af_Code4: string = `
  JSONObject ui_settings = new JSONObject();
  ui_settings.put("text_color", "#3364FF");
  ui_settings.put("corners_color", "#3364FF");
  ui_settings.put("detected_face_color", "#3364FF");
  ui_settings.put("detected_text_color", "#3364FF");
  ui_settings.put("nfc_main_sentences", "#3364FF");
  ui_settings.put("nfc_main_components", "#3364FF");
  ui_settings.put("nfc_secondary_components", "#3364FF");
  intent.putExtra("UISettings", ui_settings.toString());
  `;

  SDA_af_Code5: string = `
  JSONObject service_settings = new JSONObject();
       service_settings.put("crop_faces", true);
       // a parameter related to Sky Face Analysis component and allows to ask SkyID
          to crop the faces from the communicated documents before doing the face matching

       service_settings.put("get_parameters_url", "https://domain.name.com:7002/get_parameters");
       // a general parameter allows to change the skyID server url
       service_settings.put("certificate@domain.name.com", "-----BEGIN CERTIFICATE----- … -----END CERTIFICATE-----");
       // a general parameter allows to add certificate for the domain name : domain.name.com
         …
       intent.putExtra("ServiceSettings", service_settings.toString());

  `;

  SDA_af_Code6: string = `
implementation 'androidx.appcompat:appcompat:1.1.0'
implementation 'com.google.android.material:material:1.1.0'
implementation 'androidx.constraintlayout:constraintlayout:1.1.3'
implementation('org.apache.httpcomponents:httpmime:4.3.6') { exclude module: 'httpclient' }
implementation ('org.bouncycastle:bcprov-jdk15on:1.65') { exclude group: 'org.bouncycastle', module: 'bcprov-jdk15on' }
implementation 'org.apache.httpcomponents:httpclient-android:4.3.5'
implementation 'com.android.volley:volley:1.1.0'
  `;

  SDA_af_Code7: string = `
  private final String[] REQUIRED_PERMISSIONS = new String[]{"android.permission.CAMERA",
                                                             "android.permission.WRITE_EXTERNAL_STORAGE",
                                                             "android.permission.INTERNET",
                                                             "android.permission.READ_EXTERNAL_STORAGE"
                                                            };

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    . . .
    if (!allPermissionsGranted()) {
      ActivityCompat.requestPermissions(this, REQUIRED_PERMISSIONS, 101);
    }
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if(requestCode == 101){
      if (!allPermissionsGranted()) {
        // the code to be executed if the user does NOT grant the required permissions
        . . .
      }
    }
  }

  private boolean allPermissionsGranted(){
    for(String permission : REQUIRED_PERMISSIONS){
      if(ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED){
        return false;
      }
    }
    return true;
  `;

  SDA_af_Code8: string = `
  android {
    defaultConfig {
        ndk {
            abiFilters 'armeabi-v7a', 'arm64-v8a'
        }
    }
`;

  SDA_af_Code9: string = `
  -keep class pl.droidsonroids.gif.** {*;}
  `;

  SDA_cordova_Code1: string = `
  import com.indatacore.skyAnalytics.skyID.cn1.SkyID;
  import com.indatacore.skyAnalytics.skyID.cn1.SkyIDCallback;
      /*
       * analyzeDocument : Main function to call Sky Document Analysis.
       * @param skyIDCallback is a callback that implements the SkyIDCallback interface. It is used to return the
                              processing result.
       * @param Token         A valid token (licence) to use the SDK (you can request free trial one by contacting
                              us at contact@indatacore.com)
       * @param Language      Code (ISO 3) of the language to be used while interacting with SkyID SDK
       * @param Country       Code (ISO 3) of the country issuing the document you want to ocerize
       * @param ServiceID     The ServiceID associated to the document you want to ocerize, eg. 0102 for ID cards
                              (See SkyID SDK's documentation)
       */
  SkyID.analyzeDocument(skyIDCallback, Token, Language, Country, ServiceID);
`;

  SDA_cordova_Code2: string = `
  import com.indatacore.skyAnalytics.skyID.cn1.SkyID;
  import com.indatacore.skyAnalytics.skyID.cn1.SkyIDCallback;

    /*
     * authenticateFace : Main function to call Sky Face Analysis.
     * @param skyIDCallback is a callback that implements the SkyIDCallback interface.
     * @param Token         A valid token (licence) to use the SDK (you can request free trial one by contacting
                            us at contact@indatacore.com)
     * @param Language      Code (ISO 3) of the language to be used while interacting with SkyID SDK
     * @param DocumentFile  Path of the DocID face picture with which you want to do face matching
     */
    SkyID.authenticateFace(skyIDCallback, Token, Language, DocumentFile);
`;

  SDA_cordova_Code3: string = `
  /*
   * onDocumentAnalysisSuccess : Called when SkyID successfully analyse your document.
   * @param StatusCode            Response Status Code.
   * @param StatusLabel           Response Status Label.
   * @param RequestedInformations Extracted Informations as string in a JSON Form.
   *   Eg. {"cin_id":"xxx", "father_name":"xxx", "mother_name":"xxx", "address":"xxx", "register_civil":"xxx",
            "sexe":"X", "first_name":"xxx", "last_name":"xxx", "birth_date":"xx.xx.xxxx", "birth_place":"xxx",
            "validity_date":"xx.xx.xxxx"}
   * @param RequestedFiles        Paths of Documents/Face pictures as string in a JSON Form.
   *   Eg. {"DocumentFrontSideFile":"xxx", "DocumentBackSideFile":"xxx", "FaceFile":"xxx"}
   * @author indatacore.com
   */
  void onDocumentAnalysisSuccess(StatusCode, StatusLabel, RequestedInformations, RequestedFiles);


  /**
     * onDocumentAnalysisError : Called when SkyID failed to analyse your document.
     *
     * @param StatusCode  Response Status Code.
     * @param StatusLabel Response Status Label.
     * @author indatacore.com
     */
    void onDocumentAnalysisError( StatusCode, StatusLabel);


    /**
     * onFaceAuthenticationSuccess : Called when SDK successfully verify facial identity.
     *
     * @param StatusCode               Response Status Code.
     * @param StatusLabel              Response Status Label.
     * @param FaceAuthenticationResult The result of facial identity verification.
     *                                 "1": Selfie & DocID pictures are identical.
     *                                 "0": Selfie & DocID pictures are not identical.
     * @param SelfieFile               Path of Selfie Face picture.
     * @author indatacore.com
     */
    void onFaceAuthenticationSuccess(StatusCode, StatusLabel, FaceAuthenticationResult, SelfieFile);



    /**
     * onFaceAuthenticationError : Called when SkyID failed to analyse your document.
     *
     * @param StatusCode  Response Status Code.
     * @param StatusLabel Response Status Label.
     * @author indatacore.com
     */
    void onFaceAuthenticationError( StatusCode, StatusLabel);
  `;

  SDA_rn_Code1: string = `
  implementation 'androidx.appcompat:appcompat:1.1.0'
  implementation 'com.google.android.material:material:1.1.0'
  implementation 'androidx.constraintlayout:constraintlayout:1.1.3'
  implementation('org.apache.httpcomponents:httpmime:4.3.6') { exclude module: 'httpclient' }
  implementation ('org.bouncycastle:bcprov-jdk15on:1.65') { exclude group: 'org.bouncycastle', module: 'bcprov-jdk15on' }
  implementation 'org.apache.httpcomponents:httpclient-android:4.3.5'
  implementation 'com.android.volley:volley:1.1.0'

`;

  SDA_rn_Code2: string = `
  android {
    defaultConfig {
        ndk {  abiFilters "armeabi-v7a", "arm64-v8a" }
    }
  }
`;

  SDA_rn_Code3: string = `
  dependencies { implementation files('libs/SkyIDSDK-***.aar') }
  repositories {
      google()
      jcenter()
      mavenCentral()
  }

`;

  SDA_rn_Code4: string = `
  com.indatacore.skyanalytics.skyid.react.SkyIDModule
  com.indatacore.skyanalytics.skyid.react.SkyIDPackage
  `;

  SDA_rn_Code5: string = `
  packages.add(new SkyIDPackage());
  `;

  SDA_rn_Code6: string = `
  import { SkyIDModule } from "./SkyIDNative"
 
 /**
  * analyzeDocument : Main function to call Sky Document Analysis.
  *
  * @param Language      Code (ISO 3) of the language to be used while interacting with SkyID SDK
  * @param Country       Code (ISO 3) of the country issuing the document you want to ocerize
  * @param ServiceID     The ServiceID associated to the document you want to ocerize, eg. 0102 for ID   
  *                      cards (See SkyID SDK's documentation)
  * @param Token         A valid token (licence) to use the SDK (you can request free trial one by  
  *                      contacting us at contact@indatacore.com)
  * @param UISettings   UI Settings 
                       {"text_color": "#3364FF", "corners_color": "", "detected_face_color": "",    
                        "detected_text_color": "", "nfc_main_sentences": "", "nfc_main_components": "", 
                        "nfc_secondary_components": ""} 
  * @param ServiceSettings   Service Settings 
                            {"get_parameters_url": "https://domain.name.com:7002/get_parameters", // a general  
                                                    // parameter allows to change the skyID server url   
                           "certificate@domain.name.com": "-----BEGIN CERTIFICATE----- …"   // a general 
                            parameter allows to add certificate for the domain name : domain.name.com
                           "crop_faces": "true" // a parameter related to Sky Face Analysis component and allows      
                                                // to ask SkyID to crop the faces from the communicated documents  
                                                // before doing the face matching
                                              } 
                    * @param successCallback is a callback used to return response when processing succeeds.
                    * @param errorCallback is a callback used to return response when processing failed.
                    * @author indatacore.com
                   */
                   SkyIDModule.analyzeDocument(Language, Country, ServiceID, Token, UISettings, ServiceSettings, successCallback, errorCallback);                  
  `;

  SDA_rn_Code7: string = `
  successCallback(SuccessResponseArgs: string){ 
    // Process the SDK's response when call is succeed 
  }
  errorCallback(ErrorResponseArgs: string) {
    // Process the SDK's response when call is failed
  }
  `;

  SDA_rn_Code8: string = `
  SuccessResponseArgs:
{ StatusCode:'xxx',
   StatusLabel:'xxxxxxxxxxxxxxxxxxxxxxxxx',
   // json contenant toutes les informations extraites
   RequestedInformations: {"cin_id":"xxx", "father_name":"xxx", "mother_name":"xxx", "address":"xxx", "register_civil":"xxx", "sexe":"X", "first_name":"xxx", "last_name":"xxx", "birth_date":"xx.xx.xxxx", "birth_place":"xxx", "validity_date":"xx.xx.xxxx"},
   // json contenant toutes les informations extraites via OCR
   OCRBasedRequestedInformations: {...},
   // json contenant toutes les informations extraites via NFC
   NFCBasedRequestedInformations: {...},
   // Chemins absolus des fichiers extraits (images des documents et du visage) 
   RequestedFiles: {"DocumentFrontSideFile":"xxx", "DocumentBackSideFile":"xxx", "FaceFile_1":"xxx",     "FaceFile_2":"xxx", ...},
   // Chemins absolus des fichiers extraits via OCR (images des documents et du visage) 
   OCRBasedRequestedFiles: {...},
   // Chemins absolus des fichiers extraits via NFC (images des documents et du visage) 
   NFCBasedRequestedFiles: {...}}
ErrorResponseArgs:
{ StatusCode:'xxx',
   StatusLabel:'xxxxxxxxxxxxxxxxxxxxxxxxx'} 
  `;

  SDA_rn_Code9: string = `
  import { SkyIDModule } from "./SkyIDNative"
 /**
  * analyzeDocument : Main function to call Sky Document Analysis.
  *
  * @param Language       Code (ISO 3) of the language to be used while interacting with SkyID SDK
  * @param DocumentFiles  Path of the documents with which you want to do face matching
  *                       '{ doc_1: ["Path/to/xxxxxx_FaceFile1.jpg", "Path/to/xxxxxx_FaceFile2.jpg"]}'  
  * @param Token         A valid token (licence) to use the SDK (you can request free trial one by  
  *                      contacting us at contact@indatacore.com)
  * @param UISettings   UI Settings 
                       {"text_color": "#3364FF", "corners_color": "", "detected_face_color": "",    
                        "detected_text_color": "", "nfc_main_sentences": "", "nfc_main_components": "", 
                        "nfc_secondary_components": ""} 
  * @param ServiceSettings   Service Settings 
                            {"get_parameters_url": "https://domain.name.com:7002/get_parameters", // a general  
                                                    // parameter allows to change the skyID server url   
                           "certificate@domain.name.com": "-----BEGIN CERTIFICATE----- …"   // a general 
                            parameter allows to add certificate for the domain name : domain.name.com
                           "crop_faces": "true" // a parameter related to Sky Face Analysis component and allows      
                                                // to ask SkyID to crop the faces from the communicated documents  
                                               // before doing the face matching
                            } 
  * @param successCallback is a callback used to return response when processing succeed.
  * @param errorCallback is a callback used to return response when processing failed.
  * @author indatacore.com
 */
   SkyIDModule.authenticateFace( Language, DocumentFiles, Token, UISettings, ServiceSettings, successCallback, errorCallback);
  `;

  SDA_rn_Code10: string = `
  successCallback(SuccessResponseArgs: string) { }
  errorCallback(ErrorResponseArgs: string) {}
  `;

  SDA_rn_Code11: string = `
  SuccessResponseArgs:
  {StatusCode:'xxx',
  StatusLabel:'xxxxxxxxxxxxxxxxxxxxxxxxx',
  sky_face_match_decision_code: “1”, “0” or “-1”,
  sky_face_match_decision_label: “Accepted”, “To be verify” or “Rejected”,
  sky_face_match_decision_codes_per_document: sky_face_match_decision_code of each doc,
  SelfieFile: '/path/to/SelfieFile.jpg'}
  ErrorResponseArgs:
  { StatusCode:'xxx',
  StatusLabel:'xxxxxxxxxxxxxxxxxxxxxxxxx'} 
`;

SDA_ios_Code1: string = `
  SkyIdConfigure.shared.loadAndConfigure(product_id:"#", service_id:"#"){isConfigured,error in
  if error != nil || !isConfigured {
      print( error.debugDescription)
      return
  }
  if isConfigured
  {
      // Do any additional setup after loading the configuration.
      DispatchQueue.main.async(execute: {
          // Build SDK for provided Product and Service ID (see SkyID SDK Builder section) 
      })
  }
  }
`;

  SDA_ios_Code2: string = `
  func didBuildWithError(error: Error) {}
  `;

  SDA_ios_Code3: string = `
  // the asked document type 
  documentType:String
  // the information extracted from document key:value
  documentFields:[String:String]
  // document images cropped listed as key: list of images
  documentImages:[String:[UIImage]]
  // document profile photo cropped as skyIdFacePhoto(img:UIImage,rate:CGFloat)
  documentPhoto:[skyIdFacePhoto]
  `;

  SDA_ios_Code4: string = `
  func didDocumentAnalysisEnd(with result: SkyIdDocAnalysisResult?) {
    get the document information after end of scan
      }
   
   func didDocumentAnalysisTimeOut() {
        what you do in the case of scan timeout
    }  
  `;

  SDA_ios_Code5: string = `
  var skyIdDAView:SkyIdDocAnalysisVC!
 
  skyIdDAView=SkyIdBuilder.shared.getDocAnalysisInstance(lang: lang, guide: SdkGuide)
  skyIdDAView!.delegate=self
  skyIdDAView?.modalPresentationStyle = .fullScreen
  self.present(skyIdDAView!, animated: true, completion: nil)
  `;

  SDA_ios_Code6: string = `
  func didNFCScanEnd(with result: SkyIdDocAnalysisResult?) {
    get the document information after end of NFC  scan
      }
   
   func didNFCScanFailed(error:Error){
        what you do in the case of NFC scan error
      }
`;  

  SDA_ios_Code7: string = `
  var skyIdNFC:SkyIdNFCReaderVC!
 
  let keyData:MRZKeyModel=MRZKeyModel()
                    keyData.documentNumber=”AA**6876**”
                    keyData.birthDate=”yyMMdd date format”
                    keyData.expiryDate=”yyMMdd date format”
                      
                  skyIdNFC=SkyIdBuilder.shared.getNFCScannerInstance(lang: lang, guide: SdkGuide, keyInfo: keyData)
                  skyIdNFC!.delegate=self
                  skyIdNFC?.modalPresentationStyle = .fullScreen
                  self.present(skyIdNFC!, animated: true, completion: nil)
`;

  SDA_ios_Code8: string = `
  {
    “0102mar”:[uiimage1,uiimage2…],
    “03mar”:[uiimage1,uiimage2…],
                 …..
  }
`;

  SDA_ios_Code9: string = `
  // the asked document photos
  documentPhotos:[String:[skyIdFacePhoto]]
  // valide frontal face image
  selfieImage:UIImage
  // cropped valide frontal face image
  croppedSelfieImage:UIImage
  // the antispoofing check asked to verifiy liveness
  antispoofingCheck:[String:Bool]
  // the antispoofing status
  antispoofingStatus:Bool
  // the matching result dictionary from api face matching
  matchingResult:[String:Any]?
  `;

  SDA_ios_Code10: string = `
  func didFaceRecEnd(with result: SkyIdFaceRecResult?) {
    get the face check and matching result
  }
 
  func didFaceFailed() {
      what you do in the case of face check failed
 }
`;

  SDA_ios_Code11: string = `
  var skyIdFRView:SkyIdFaceRecVC!
 
  self.skyIdFaceRec=SkyIdBuilder.shared.getFaceRecInstance(with:docPhotos,lang:lang, guide:SdkGuide)
  self.skyIdFaceRec!.delegate=self
  self.skyIdFaceRec?.modalPresentationStyle = .fullScreen
  self.present(self.skyIdFaceRec!, animated: true, completion: nil)
  `;

  constructor() { }

  ngOnInit(): void {
  }



}
