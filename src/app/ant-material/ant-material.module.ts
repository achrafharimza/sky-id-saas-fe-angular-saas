import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';





import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';

const material: any[] | Type<any> | ModuleWithProviders<{}> = [
  NzButtonModule,
  NzLayoutModule,
  NzIconModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzTabsModule,
  NzUploadModule,
  NzModalModule,
  NzSelectModule,
  NzGridModule,
  NzSpaceModule,
  NzDescriptionsModule,
  NzFormModule,
  NzTableModule,
  NzDividerModule,
  NzCheckboxModule,
  NzPaginationModule,
  NzTagModule,
  NzProgressModule,
  NzPopoverModule,
  NzAlertModule,
  NzSpinModule,
  NzDatePickerModule,
  NzSwitchModule
];

@NgModule({
  imports: [material],

  exports: [material]
})
export class AntMaterialModule { }


