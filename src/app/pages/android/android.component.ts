import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent implements OnInit {
  sizee: 'small' | 'middle' | 'large' | number = 'small';
  size: NzButtonSize = 'large';
  constructor() { }

  ngOnInit(): void {
  }

}
