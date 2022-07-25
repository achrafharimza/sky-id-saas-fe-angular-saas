import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isCollapsed = false;
  constructor(private tokenService: TokenService,private router:Router) {}
  currentuser: any = null;
  isadmin: any = null;





  ngOnInit(): void {
    console.log('ngOnInit');
    this.tokenService.authStatus.subscribe((res) => {
      this.currentuser = this.tokenService.getInfos();
      console.log('currentuserNG : ', this.currentuser);
      
    });
  }
   openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  logout() {
    this.tokenService.remove();
    this.tokenService.changeStatus(false);
    this.router.navigateByUrl('/');
  }
}
