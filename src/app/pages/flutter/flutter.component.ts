import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-flutter',
  templateUrl: './flutter.component.html',
  styleUrls: ['./flutter.component.scss']
})
export class FlutterComponent implements OnInit {

  sizee: 'small' | 'middle' | 'large' | number = 'small';
  size: NzButtonSize = 'large';
  constructor() { }

  ngOnInit(): void {
  }

}
