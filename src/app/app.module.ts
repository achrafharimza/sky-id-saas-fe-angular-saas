import { HttpIntercepterAuthService } from './service/login/http-intercepter-auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { AntMaterialModule } from './ant-material/ant-material.module';
import { SkyDocumentAnalysisComponent } from './pages/sky-document-analysis/sky-document-analysis.component';
import { AndroidComponent } from './pages/android/android.component';
import { FlutterComponent } from './pages/flutter/flutter.component';
import { ApiComponent } from './pages/api/api.component';
import { SkyIDentificationComponent } from './pages/sky-identification/sky-identification.component';
import { ApiskyComponent } from './pages/apisky/apisky.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CookieService } from 'ngx-cookie-service';
import { HistoryComponent } from './pages/history/history.component';
import { ApiHistoryComponent } from './pages/api-history/api-history.component';
import { SkyDocumentAnalysisHistoryComponent } from './components/sky-document-analysis-history/sky-document-analysis-history.component';
import { HistoryModalComponent } from './components/history-modal/history-modal.component';
import { JsonPreComponent } from './components/json-pre/json-pre.component';
import { WebDocumentationComponent } from './pages/web-documentation/web-documentation.component';
import { SkyIdentificationDocumentationComponent } from './pages/sky-identification-documentation/sky-identification-documentation.component';
import { SkyIDentificationMobileDocumentationComponent } from './pages/sky-identification-mobile-documentation/sky-identification-mobile-documentation.component';
import { SkyDocumentAnalysisMobileDocumentationComponent } from './pages/sky-document-analysis-mobile-documentation/sky-document-analysis-mobile-documentation.component';
import { NzMessageModule } from 'ng-zorro-antd/message';

// import { MarkdownModule } from 'ngx-markdown';
// registerLocaleData(en);
import { WebcamModule } from 'ngx-webcam';
import { SkyIdWebcamComponent } from './components/sky-id-webcam/sky-id-webcam.component';
import { SkyIdentificationHistoryComponent } from './pages/sky-identification-history/sky-identification-history.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { SkyIdentificationComponent } from './documentation/sky-identification/sky-identification.component';
import { SkyDocumentComponent } from './documentation/sky-document/sky-document.component';
import { SkyFaceComponent } from './documentation/sky-face/sky-face.component';
import { SkyDocumentHistoryComponent } from './history/sky-document-history/sky-document-history.component';
import { SkyFaceHistoryComponent } from './history/sky-face-history/sky-face-history.component';
import { SkyIdentificationHistComponent } from './history/sky-identification-hist/sky-identification-hist.component';
import { LayoutMobileComponent } from './layout/layout-mobile/layout-mobile.component';
import { SkyFaceWebHistoryComponent } from './pages/sky-face-web-history/sky-face-web-history.component';
import { SkyFaceApiHistoryComponent } from './pages/sky-face-api-history/sky-face-api-history.component';
import { SkyFaceApiDemoComponent } from './pages/sky-face-api-demo/sky-face-api-demo.component';
import { SkyFaceWebDemoComponent } from './pages/sky-face-web-demo/sky-face-web-demo.component';
import { UsersGestionComponent } from './pages/users-gestion/users-gestion.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { SkyFaceApiDocComponent } from './pages/sky-face-api-doc/sky-face-api-doc.component';
import { LoginImageComponent } from './components/login-image/login-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
   
    ProductComponent,
    SkyDocumentAnalysisComponent,
    AndroidComponent,
    
    FlutterComponent,
    ApiComponent,
    SkyIDentificationComponent,
    ApiskyComponent,
    MobileComponent,
    LoginComponent,
    LoginFormComponent,
    HistoryComponent,
    ApiHistoryComponent,
    SkyDocumentAnalysisHistoryComponent,
    HistoryModalComponent,
    JsonPreComponent,
    WebDocumentationComponent,
    SkyIdentificationDocumentationComponent,

    SkyIDentificationMobileDocumentationComponent,
    SkyDocumentAnalysisMobileDocumentationComponent,
    SkyIdWebcamComponent,
    SkyIdentificationHistoryComponent,
  
    NotfoundComponent,
    SkyIdentificationComponent,
    SkyDocumentComponent,
    SkyFaceComponent,
    SkyDocumentHistoryComponent,
    SkyFaceHistoryComponent,
    SkyIdentificationHistComponent,
    LayoutMobileComponent,
    SkyFaceWebHistoryComponent,
    SkyFaceApiHistoryComponent,
    SkyFaceApiDemoComponent,
    SkyFaceWebDemoComponent,
    UsersGestionComponent,
    UsersAddComponent,
    SkyFaceApiDocComponent,
    LoginImageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AntMaterialModule,
    WebcamModule,
    NzMessageModule
    // MarkdownModule.forRoot(),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterAuthService, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
