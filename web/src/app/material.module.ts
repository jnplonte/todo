import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatSelectModule,
            MatCheckboxModule],
  exports: [MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatProgressSpinnerModule,
            MatSelectModule,
            MatCheckboxModule]
})
export class MaterialModule { }
