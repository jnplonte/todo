import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from './../../../environments/environment';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    companyName: string = '';

    constructor() {

    }

    ngOnInit() {
        this.companyName = environment.companyName;
    }
}
