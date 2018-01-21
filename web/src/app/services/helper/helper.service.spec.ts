import { inject, TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', function () {
    let service: HelperService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ HelperService ]
        });
    });

    beforeEach(inject([HelperService], s => { service = s; }));

    it('should create service', () => {
        expect(service).toBeDefined();
    });

    it('should check all services', () => {
        expect(service.getData).toBeDefined();
        expect(service.postData).toBeDefined();
        expect(service.putData).toBeDefined();
        expect(service.deleteData).toBeDefined();
        expect(service.cleanData).toBeDefined();
        expect(service.prepareData).toBeDefined();
        expect(service.handleObservableError).toBeDefined();
        expect(service.handleObservableSuccess).toBeDefined();
    });
});
