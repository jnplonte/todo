import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './dashboard.component';
import { HelperService } from './../../services/helper/helper.service';
import { AlertService } from './../../services/alert/alert.service';

import { MaterialModule } from './../../material.module';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ DashboardComponent ],
        providers: [
            { provide: 'helperService', useClass: HelperService },
            { provide: 'alertService', useClass: AlertService }
        ],
        imports: [
            RouterTestingModule,
            MaterialModule,
            ReactiveFormsModule,
            HttpClientModule,
            FormsModule,
            BrowserAnimationsModule
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });
});
