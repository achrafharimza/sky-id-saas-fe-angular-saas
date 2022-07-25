import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzTabPosition } from 'ng-zorro-antd/tabs';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  sizee: 'small' | 'middle' | 'large' | number = 'small';
  size: NzButtonSize = 'large';
  position: NzTabPosition = 'left';
  constructor() { }

  ngOnInit(): void {
  }

}
