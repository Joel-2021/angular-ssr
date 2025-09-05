import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '../components/icon/icon.component';
import { LocalTimePipe } from '../pipes/local-time.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { NoContentComponent } from '../components/no-content/no-content.component';
import { NotifyService } from './notify.service';
import { Urls } from './Urls';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IconComponent,
    LocalTimePipe,
    NoContentComponent,
  ],
  exports: [
    FormsModule,
    IconComponent,
    LocalTimePipe,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    NoContentComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule {

  static forRoot(): { ngModule: SharedModule; providers: (NotifyService | Urls)[] } {

    return {
      ngModule: SharedModule,
      providers: [
        NotifyService,
        Urls
      ]
    };
  }
}
