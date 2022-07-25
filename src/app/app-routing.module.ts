import { SkyIdentificationHistoryComponent } from './pages/sky-identification-history/sky-identification-history.component';
import { SkyDocumentAnalysisMobileDocumentationComponent } from './pages/sky-document-analysis-mobile-documentation/sky-document-analysis-mobile-documentation.component';
import { SkyIdentificationDocumentationComponent } from './pages/sky-identification-documentation/sky-identification-documentation.component';
import { SkyDocumentAnalysisHistoryComponent } from './components/sky-document-analysis-history/sky-document-analysis-history.component';
import { ApiHistoryComponent } from './pages/api-history/api-history.component';
import { SkyIDentificationComponent } from './pages/sky-identification/sky-identification.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { ApiskyComponent } from './pages/apisky/apisky.component';
import { ApiComponent } from './pages/api/api.component';
import { AndroidComponent } from './pages/android/android.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkyDocumentAnalysisComponent } from './pages/sky-document-analysis/sky-document-analysis.component';
import { FlutterComponent } from './pages/flutter/flutter.component';
import { LoginComponent } from './pages/login/login.component';
import { WebDocumentationComponent } from './pages/web-documentation/web-documentation.component';
// import { MobileDocumentationComponent } from './pages/mobile-documentation/mobile-documentation.component';
import { SkyIDentificationMobileDocumentationComponent } from './pages/sky-identification-mobile-documentation/sky-identification-mobile-documentation.component';
import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { SkyDocumentComponent } from './documentation/sky-document/sky-document.component';
import { LayoutMobileComponent } from './layout/layout-mobile/layout-mobile.component';
import { SkyFaceWebHistoryComponent } from './pages/sky-face-web-history/sky-face-web-history.component';
import { SkyFaceApiHistoryComponent } from './pages/sky-face-api-history/sky-face-api-history.component';
import { SkyFaceApiDemoComponent } from './pages/sky-face-api-demo/sky-face-api-demo.component';
import { SkyFaceWebDemoComponent } from './pages/sky-face-web-demo/sky-face-web-demo.component';
import { UsersAddComponent } from './pages/users-add/users-add.component';
import { UsersGestionComponent } from './pages/users-gestion/users-gestion.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { SkyFaceApiDocComponent } from './pages/sky-face-api-doc/sky-face-api-doc.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent}
   {
    path: '', component: LoginComponent,
    children: [
    ]
  },

  { path: 'home', component: HomeComponent,
  canActivate: [AuthGuard],
        children: [


          {path: 'skydoc' , component: LayoutMobileComponent,
          children: [
            { path: '', redirectTo: 'api', pathMatch: 'full' },
            { path: 'api', component: SkyDocumentAnalysisComponent, pathMatch: 'full'},
            { path: 'mobile', component: MobileComponent, pathMatch: 'full'},
            { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},

             
          ]},

          {path: 'skyident' , component: LayoutMobileComponent,
          children: [
            { path: '', redirectTo: 'api', pathMatch: 'full' },
            { path: 'mobile', component: MobileComponent, pathMatch: 'full'},  
            { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},
            { path: 'api', component: ComingSoonComponent, pathMatch: 'full'},
           
          ]},

          {path: 'skyface' , component: LayoutMobileComponent,
          children: [
            { path: '', redirectTo: 'api', pathMatch: 'full' },
            { path: 'api', component: SkyFaceApiDemoComponent, pathMatch: 'full'},
            { path: 'mobile', component: MobileComponent, pathMatch: 'full'},
            { path: 'web', component: SkyFaceWebDemoComponent, pathMatch: 'full'},
             
          ]},
/////////documentation
{path: 'documentation' ,
children: [
  {path: 'skydoc' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'mobile', component: SkyDocumentAnalysisMobileDocumentationComponent, pathMatch: 'full'},
    { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},  
  ]},

  {path: 'skyface' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: SkyFaceApiDocComponent, pathMatch: 'full'},
    { path: 'mobile', component: SkyIDentificationMobileDocumentationComponent, pathMatch: 'full'},
    { path: 'web', component: SkyIdentificationDocumentationComponent, pathMatch: 'full'},  
  ]},
  {path: 'skyident' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'mobile', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},  
  ]},
   
]},
///////////history d
{path: 'session' ,
children: [
  {path: 'skydoc' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: SkyDocumentAnalysisHistoryComponent, pathMatch: 'full'},
    { path: 'mobile', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},  
  ]},

  {path: 'skyface' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: SkyFaceApiHistoryComponent, pathMatch: 'full'},
    { path: 'mobile', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'web', component: SkyFaceWebHistoryComponent, pathMatch: 'full'},  
  ]},
  {path: 'skyident' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'mobile', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},  
  ]},
   
]},
///////////gestion
{path: 'gestion' ,
children: [
  {path: 'usersadd' , component: UsersAddComponent,},
  {path: 'users' , component: UsersGestionComponent,},


  {path: 'skyface' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: SkyIdentificationHistoryComponent, pathMatch: 'full'},
    { path: 'mobile', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},  
  ]},
  {path: 'skyident' , component: LayoutMobileComponent,
  children: [
    { path: '', redirectTo: 'api', pathMatch: 'full' },
    { path: 'api', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'mobile', component: ComingSoonComponent, pathMatch: 'full'},
    { path: 'web', component: ComingSoonComponent, pathMatch: 'full'},  
  ]},
   
]},

/////////////////////////
            {path: 'api' , component: ApiComponent,
            children: [
                { path: 'skydoc', component: SkyDocumentAnalysisComponent, pathMatch: 'full'},
                { path: 'skyface', component: SkyIDentificationComponent, pathMatch: 'full'},
            ]},
            {path: 'mobile' , component: MobileComponent,
            children: [
                { path: 'android', component: AndroidComponent, pathMatch: 'full'},
               
                { path: 'flutter', component: FlutterComponent, pathMatch: 'full'},
            ]},
            {
            path: 'apidoc', component: ApiskyComponent,
            children: [
              // {path: 'skyid', component: SkyIDentificationComponent, pathMatch: 'full'}
            ]
            },
            {
            path: 'webdoc', component: WebDocumentationComponent,
            children: [
              {path: 'skyid', component: SkyIdentificationDocumentationComponent, pathMatch: 'full'}
            ]},
            {
             path: 'mobiledoc',
            children: [
              {path: 'skyid', component: SkyIDentificationMobileDocumentationComponent, pathMatch: 'full'},
              {path: 'skyda', component: SkyDocumentAnalysisMobileDocumentationComponent, pathMatch: 'full'}
            ]},
            {
            path: 'apihistory', component: ApiHistoryComponent,
            children: [
              {path: 'skydochistory', component: SkyDocumentAnalysisHistoryComponent, pathMatch: 'full'},
              // {path: 'search/:key', component: SkyDocumentAnalysisHistoryComponent, pathMatch: 'full'},
              {path: 'skyidhistory', component: SkyIdentificationHistoryComponent, pathMatch: 'full'}
            ]},
        ]},




        { path: '**', component: NotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
